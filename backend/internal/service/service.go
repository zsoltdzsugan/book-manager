package service

import (
	"context"

	"github.com/zsoltdzsugan/book-manager/internal/models"
)

type Service struct {
	Book interface {
		GetAll(ctx context.Context, keyword string, maxLimit int) ([]models.Book, error)
		GetOneByKeyword(ctx context.Context, keyword string) (*models.Book, error)
		GetOneByID(ctx context.Context, id string) (*models.Book, error)
	}
}

func NewService() *Service {
	return &Service{
		Book: &BookService{},
	}
}