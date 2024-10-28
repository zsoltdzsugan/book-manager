package main

import (
	"log"

	"github.com/zsoltdzsugan/book-manager/internal/database"
	"github.com/zsoltdzsugan/book-manager/internal/env"
	"github.com/zsoltdzsugan/book-manager/internal/store"
)

func main() {
	cfg := config{
		addr: env.GetString("ADDR", ":8080"),
		db: dbConfig{
			addr: env.GetString("DB_ADDR", "DB_FALLBACK_ADDR"),
			maxOpenConns: env.GetInt("DB_MAX_OPEN_CONNS", 30),
			maxIdleConns: env.GetInt("DB_MAX_IDLE_CONNS", 30),
			maxIdleTime: env.GetString("DB_MAX_IDLE_TIME", "15m"),
		},
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

	store := store.NewStorage(db)
	
	app := &application{
		config: cfg,
		store: store,
	}

	mux:=app.mount()

	log.Fatal(app.run(mux))
}