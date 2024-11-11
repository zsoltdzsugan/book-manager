package store

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/zsoltdzsugan/book-manager/internal/models"
)

type BookshelfStore struct {
	db *sql.DB
}

func (s *BookshelfStore) Create(ctx context.Context, userID int64) error {
	bookshelves := []models.Bookshelf{
		{UserID: userID, Title: "Want to Read"},
		{UserID: userID, Title: "Currently Reading"},
		{UserID: userID, Title: "Read"},
	}

	for _, bookshelf := range bookshelves {
		query := `
			INSERT INTO bookshelves (user_id, title)
			VALUES ($1, $2)
			RETURNING id
		`
		if err := s.db.QueryRowContext(ctx, query, bookshelf.UserID, bookshelf.Title).Scan(&bookshelf.ID); err != nil {
			return fmt.Errorf("failed to create bookshelf %s: %w", bookshelf.Title, err)
		}
	}

	return nil
}

func (s *BookshelfStore) GetByID(ctx context.Context, id string) (*models.Bookshelf, error) {
	query := `SELECT id, user_id, title, created_at, updated_at 
              FROM bookshelves WHERE id = $1`
	
	bookshelf := &models.Bookshelf{}

	err := s.db.QueryRowContext(ctx, query, id).Scan(
		&bookshelf.ID,
		&bookshelf.UserID,
		&bookshelf.Title,
		&bookshelf.CreatedAt,
		&bookshelf.UpdatedAt,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("bookshelf with ID %s not found", id) // More specific error
		}
		return nil, fmt.Errorf("error retrieving bookshelf by ID %s: %w", id, err) // Improved error message
	}

	return bookshelf, nil
}

func (s *BookshelfStore) GetByUserID(ctx context.Context, userID int64) ([]models.Bookshelf, error) {
	query := `SELECT id, user_id, title, created_at, updated_at 
			  FROM bookshelves 
			  WHERE user_id = $1;
`
	
	rows, err := s.db.QueryContext(ctx, query, userID)
	if err != nil {
		return nil, fmt.Errorf("error querying bookshelves for user ID %d: %w", userID, err)
	}
	defer rows.Close() // Ensure rows are closed when done

	var bookshelves []models.Bookshelf

	for rows.Next() {
		var bookshelf models.Bookshelf
		if err := rows.Scan(&bookshelf.ID, &bookshelf.UserID, &bookshelf.Title, &bookshelf.CreatedAt, &bookshelf.UpdatedAt); err != nil {
			return nil, fmt.Errorf("error scanning bookshelf for user ID %d: %w", userID, err)
		}
		bookshelves = append(bookshelves, bookshelf)
	}

	// Check for errors that may have occurred during iteration
	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating over bookshelves for user ID %d: %w", userID, err)
	}

	return bookshelves, nil
}
