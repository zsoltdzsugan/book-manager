package store

import (
	"context"
	"database/sql"
	"fmt"
	"log"

	"github.com/zsoltdzsugan/book-manager/internal/models"
)

type BookshelfVolumeStore struct {
	db *sql.DB
}

func (s *BookshelfVolumeStore) AddToBookshelf(ctx context.Context, bookshelfVolume *models.BookshelfVolume) error {
	query := `
		INSERT INTO bookshelf_volumes (bookshelf_id, book_id)
		VALUES ($1, $2)
		ON CONFLICT (bookshelf_id, book_id) DO NOTHING
	`
	_, err := s.db.ExecContext(ctx, query, bookshelfVolume.BookshelfID, bookshelfVolume.BookID)
	if err != nil {
		return fmt.Errorf("failed to add book to bookshelf: %w", err)
	}
	return nil
}

func (s *BookshelfVolumeStore) GetByBookshelfID(ctx context.Context, bookshelfID string) ([]models.BookshelfVolume, error) {
	query := `
		SELECT bookshelf_id, book_id 
		FROM bookshelf_volumes WHERE bookshelf_id = $1
	`

	log.Printf("Executing query to fetch volumes for bookshelf ID: %s", bookshelfID)

	rows, err := s.db.QueryContext(ctx, query, bookshelfID)
	if err != nil {
		return nil, fmt.Errorf("error querying bookshelf volumes for bookshelf ID %s: %w", bookshelfID, err)
	}
	defer rows.Close() // Ensure rows are closed when done

	var bookshelfVolumes []models.BookshelfVolume

	for rows.Next() {
		var bookshelfVolume models.BookshelfVolume
		if err := rows.Scan(&bookshelfVolume.BookshelfID, &bookshelfVolume.BookID); err != nil {
			log.Printf("Error scanning row for bookshelf ID %s: %v", bookshelfID, err)
			return nil, fmt.Errorf("error scanning bookshelf volume for bookshelf ID %s: %w", bookshelfID, err)
		}
		bookshelfVolumes = append(bookshelfVolumes, bookshelfVolume)
	}

	if err := rows.Err(); err != nil {
		log.Printf("Error iterating over rows for bookshelf ID %s: %v", bookshelfID, err)
		return nil, fmt.Errorf("error iterating over bookshelf volumes for bookshelf ID %s: %w", bookshelfID, err)
	}

	log.Printf("Successfully fetched %d volumes for bookshelf ID %s", len(bookshelfVolumes), bookshelfID)
	return bookshelfVolumes, nil
}

func (s *BookshelfVolumeStore) RemoveFromBookshelf(ctx context.Context, bookshelfID, bookID string) error {
	query := `
		DELETE FROM bookshelf_volumes WHERE bookshelf_id = $1 AND book_id = $2
	`
	result, err := s.db.ExecContext(ctx, query, bookshelfID, bookID)
	if err != nil {
		return fmt.Errorf("failed to remove book from bookshelf: %w", err)
	}

	// Check if any rows were affected
	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return fmt.Errorf("error checking rows affected: %w", err)
	}
	if rowsAffected == 0 {
		return fmt.Errorf("no book found with ID %s in bookshelf %s", bookID, bookshelfID)
	}

	return nil
}
