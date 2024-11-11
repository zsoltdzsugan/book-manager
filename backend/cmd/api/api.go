package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/zsoltdzsugan/book-manager/internal/env"
	"github.com/zsoltdzsugan/book-manager/internal/routes/book"
	"github.com/zsoltdzsugan/book-manager/internal/routes/bookshelf"
	"github.com/zsoltdzsugan/book-manager/internal/routes/bookshelfVolume"
	"github.com/zsoltdzsugan/book-manager/internal/routes/user"
	"github.com/zsoltdzsugan/book-manager/internal/service"
	"github.com/zsoltdzsugan/book-manager/internal/store"
)

type application struct {
	config  config
	store   store.Storage
	service service.Service
}

type config struct {
	addr      string
	db        dbConfig
	staticDir string
}

type dbConfig struct {
	addr         string
	maxOpenConns int
	maxIdleConns int
	maxIdleTime  string
}

func (app *application) mount() http.Handler {
	r := chi.NewRouter()

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Timeout(60 * time.Second))

	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{env.GetString("DEV_ADDR", "http://localhost:5173"), env.GetString("ADDR", "http://localhost:4000")},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		ExposedHeaders:   []string{"Set-Cookie"},
		AllowCredentials: true,
	}))

	userHandler := user.NewHandler(app.store)
	bookshelfHandler := bookshelf.NewHandler(app.store)
	bookshelfVolumeHandler := bookshelfVolume.NewHandler(app.store)

	bookHandler := book.NewHandler(app.service)

	r.Route("/v1", func(r chi.Router) {
		r.Get("/health", app.healthCheckHandler)
		userHandler.RegisterRoutes(r)
		bookshelfHandler.RegisterRoutes(r)
		bookshelfVolumeHandler.RegisterRoutes(r)
		bookHandler.RegisterRoutes(r)
	})

	staticDir := http.Dir(app.config.staticDir)
	fileServer := http.FileServer(staticDir)

	r.NotFound(func(w http.ResponseWriter, r *http.Request) {
		if _, err := os.Stat(filepath.Join(app.config.staticDir, r.URL.Path)); os.IsNotExist(err) {
			http.ServeFile(w, r, filepath.Join(app.config.staticDir, "index.html"))
		} else {
			fileServer.ServeHTTP(w, r)
			log.Println("else fileserver")
		}
	})

	return r
}

func (app *application) run(mux http.Handler) error {

	srv := &http.Server{
		Addr:         app.config.addr,
		Handler:      mux,
		WriteTimeout: time.Second * 30,
		ReadTimeout:  time.Second * 10,
		IdleTimeout:  time.Minute,
	}

	log.Printf("Server started at %s", app.config.addr)

	return srv.ListenAndServe()
}
