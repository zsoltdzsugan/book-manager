package store

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"log"
	"time"

	"github.com/zsoltdzsugan/book-manager/internal/models"
)

type UserStore struct {
	db *sql.DB
}

func (s *UserStore) Create(ctx context.Context, user *models.User) error {
    query := `
		INSERT INTO users (first_name, middle_name, last_name, username, password, email, gender)
		VALUES ($1, $2, $3, $4, $5, $6, $7)
		RETURNING id, created_at, updated_at
	`
    err := s.db.QueryRowContext(ctx, query,
        user.FirstName,
        user.MiddleName,
        user.LastName,
        user.Username,
        user.Password, // Ensure this is the hashed password
        user.Email,
		user.Gender,
    ).Scan(&user.ID, &user.CreatedAt, &user.UpdatedAt)

    if err != nil {
        return fmt.Errorf("failed to create user: %w", err)
    }

    return nil
}
func (s *UserStore) Update(ctx context.Context, user *models.User) error {
    query := `
        UPDATE users
        SET 
            first_name = $1,
            middle_name = $2,
            last_name = $3,
            username = $4,
            email = $5,
            birth_date = $6,
			gender = $7,
            updated_at = NOW()
        WHERE id = $8
        RETURNING id, updated_at
    `
    err := s.db.QueryRowContext(ctx, query,
        user.FirstName,
        user.MiddleName,
        user.LastName,
        user.Username,
        user.Email,
		user.Birthdate,
		user.Gender,
		user.ID,
    ).Scan(&user.ID, &user.UpdatedAt)

    if err != nil {
        return fmt.Errorf("failed to update user: %w", err)
    }
	log.Printf("user updated")
    return nil
}

func (s *UserStore) Delete(ctx context.Context, id int64) error {
	query := `DELETE FROM users WHERE id = $1`

	result, err := s.db.ExecContext(ctx, query, id)
	if err != nil {
		return fmt.Errorf("error deleting user with ID %d: %w", id, err)
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		return fmt.Errorf("could not retrieve affected rows: %w", err)
	}

	if rowsAffected == 0 {
		return fmt.Errorf("user with ID %d not found", id)
	}

	return nil
}

func (s *UserStore) GetByEmail(ctx context.Context, email string) (*models.User, error) {
	query := `SELECT id, username, password, email, created_at, updated_at  
              FROM users WHERE email = $1`
	user := &models.User{}

	err := s.db.QueryRowContext(ctx, query, email).Scan(
		&user.ID,
		&user.Username,
		&user.Password,
		&user.Email,
		&user.CreatedAt,
		&user.UpdatedAt,
	)
	
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("no user found with email %s", email) // More specific error
		}
		return nil, fmt.Errorf("error retrieving user by email %s: %w", email, err) // Improved error message
	}

	return user, nil
}

func (s *UserStore) GetByID(ctx context.Context, id int64) (*models.User, error) {
	query := `SELECT id, first_name, middle_name, last_name, username, password, email, birth_date, gender, created_at, updated_at 
              FROM users WHERE id = $1`
	user := &models.User{}
	
	var birthdate *time.Time
	err := s.db.QueryRowContext(ctx, query, id).Scan(
		&user.ID,
		&user.FirstName,
		&user.MiddleName,
		&user.LastName,
		&user.Username,
		&user.Password,
		&user.Email,
		&birthdate,
		&user.Gender,
		&user.CreatedAt,
		&user.UpdatedAt,
	)
	
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			log.Printf("No user found with ID: %d", id)
			return nil, fmt.Errorf("user with ID %d not found: %w", id, err)
		}
		log.Printf("Error retrieving user with ID %d: %v", id, err)
		return nil, fmt.Errorf("error retrieving user by ID %d: %w", id, err)
	}
	
	// Check for nil before dereferencing
	if birthdate != nil {
		user.Birthdate = *birthdate // Set the value if it's not nil
	} else {
		user.Birthdate = time.Time{} // Set to zero time if it's nil (or handle as desired)
	}
	log.Printf("USERBYID: %v", user)

	return user, nil
}