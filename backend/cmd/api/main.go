package main

import (
	"log"

	_ "github.com/lib/pq"
	"github.com/zsoltdzsugan/book-manager/internal/database"
	"github.com/zsoltdzsugan/book-manager/internal/env"
	"github.com/zsoltdzsugan/book-manager/internal/service"
	"github.com/zsoltdzsugan/book-manager/internal/store"
)

func main() {
	cfg := config{
		addr: env.GetString("ADDR", ":8080"),
		db: dbConfig{
			addr:         env.GetString("DB_ADDR", "postgres://admin:adminpassword@localhost/bookmanager?sslmode=disable"),
			maxOpenConns: env.GetInt("DB_MAX_OPEN_CONNS", 30),
			maxIdleConns: env.GetInt("DB_MAX_IDLE_CONNS", 30),
			maxIdleTime:  env.GetString("DB_MAX_IDLE_TIME", "15m"),
		},
		staticDir: env.GetString("STATICDIR_DEV", "STATICDIR_DEV"),
	}
	db, err := database.New(
		cfg.db.addr,
		cfg.db.maxOpenConns,
		cfg.db.maxIdleConns,
		cfg.db.maxIdleTime,
	)
	if err != nil {
		log.Panic(err)
	}

	defer db.Close()
	log.Println("Database connection pool established")
	log.Printf("Staticdir: %v\n", cfg.staticDir)
	store := store.NewStorage(db)
	service := service.NewService()

	app := &application{
		config:  cfg,
		store:   store,
		service: *service,
	}

	mux := app.mount()

	log.Fatal(app.run(mux))
}
