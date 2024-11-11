package store

import (
	"context"
	"database/sql"

	"github.com/zsoltdzsugan/book-manager/internal/models"
)

type Storage struct {
	User interface {
		Create(ctx context.Context, user *models.User) error
		Update(ctx context.Context, user *models.User) error
		Delete(ctx context.Context, id int64) error
		GetByID(ctx context.Context, id int64) (*models.User, error)
		GetByEmail(ctx context.Context, email string) (*models.User, error)
	}
	Bookshelf interface {
		Create(ctx context.Context, userID int64) error
		GetByID(ctx context.Context, id string) (*models.Bookshelf, error)
		GetByUserID(ctx context.Context, userID int64) ([]models.Bookshelf, error) // Return all bookshelves for user
	}
	BookshelfVolume interface {
		AddToBookshelf(ctx context.Context, bookshelfVolume *models.BookshelfVolume) error
		GetByBookshelfID(ctx context.Context, bookshelfID string) ([]models.BookshelfVolume, error) // Return all books in bookshelf
		RemoveFromBookshelf(ctx context.Context, bookshelfID, bookID string) error // Remove book from bookshelf
	}
}

func NewStorage(db *sql.DB) Storage{
	return Storage{
		User: &UserStore{db},
		Bookshelf: &BookshelfStore{db},
		BookshelfVolume: &BookshelfVolumeStore{db},
	}
}