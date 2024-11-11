package service

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"

	"github.com/zsoltdzsugan/book-manager/internal/env"
	"github.com/zsoltdzsugan/book-manager/internal/models"
)

type BookService struct {
	// db *sql.DB
}

func (s *BookService) GetAll(ctx context.Context, keyword string, maxLimit int) ([]models.Book, error) {
	defaultKeyword := "books"
	defaultMaxLimit := 33

	if keyword == "" {
		keyword = defaultKeyword
	}
	if maxLimit == 0 {
		maxLimit = defaultMaxLimit
	}
	
	encodedKeyword := url.QueryEscape(keyword)
	url := fmt.Sprintf(`https://www.googleapis.com/books/v1/volumes?q=%v&maxResults=%v&key=%v`, encodedKeyword, maxLimit, env.GetString("GOOGLE_API_KEY", "GOOGLE_BACKUP_API_KEY"))

	res, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch books: %w", err)
	}
	log.Printf("fetched data: %v", res)
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to fetch books, status code: %d", res.StatusCode)
	}

	var result struct {
		Items []struct {
			ID			string				`json:"id"`
			VolumeInfo 	models.VolumeInfo	`json:"volumeInfo"`
			SaleInfo	models.SaleInfo		`json:"saleInfo"`
			AccessInfo 	models.AccessInfo	`json:"accessInfo"`
		} `json:"items"`
	}

	if err := json.NewDecoder(res.Body).Decode(&result); err != nil {
		return nil, fmt.Errorf("failed to decode response: %w", err)
	}

	var books []models.Book
	for _, item := range result.Items {
		if item.VolumeInfo.Title == "" {
			continue
		}
		book := models.Book{
			ID:         item.ID,
			VolumeInfo: item.VolumeInfo,
			SaleInfo: 	item.SaleInfo,
			AccessInfo:	item.AccessInfo,
		}
		books = append(books, book)
	}

	return books, nil
}

func (s *BookService) GetOneByKeyword(ctx context.Context, keyword string) (*models.Book, error) {
	defaultKeyword := "books"
	defaultMaxLimit := 1

	if keyword == "" {
		keyword = defaultKeyword
	}
	
	encodedKeyword := url.QueryEscape(keyword)
	url := fmt.Sprintf(`https://www.googleapis.com/books/v1/volumes?q=%v&maxResults=%v&key=%v`, encodedKeyword, defaultMaxLimit, env.GetString("GOOGLE_API_KEY", "GOOGLE_BACKUP_API_KEY"))
	
	res, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch books: %w", err)
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to fetch books, status code: %d", res.StatusCode)
	}

	var result struct {
		Items []struct {
			ID			string				`json:"id"`
			VolumeInfo 	models.VolumeInfo	`json:"volumeInfo"`
			SaleInfo	models.SaleInfo		`json:"saleInfo"`
			AccessInfo 	models.AccessInfo	`json:"accessInfo"`
		} `json:"items"`
	}

	if err := json.NewDecoder(res.Body).Decode(&result); err != nil {
		return nil, fmt.Errorf("failed to decode Google API response: %w", err)
	}

	if len(result.Items) == 0 {
		return nil, fmt.Errorf("no books found for the keyword %v", keyword)
	}

	book := &models.Book{
		ID:         result.Items[0].ID,
		VolumeInfo: result.Items[0].VolumeInfo,
		SaleInfo: 	result.Items[0].SaleInfo,
		AccessInfo: result.Items[0].AccessInfo,
	}

	return book, nil
}

func (s *BookService) GetOneByID(ctx context.Context, id string) (*models.Book, error) {
	url := fmt.Sprintf(`https://www.googleapis.com/books/v1/volumes/%s?key=%s`, id, env.GetString("GOOGLE_API_KEY", "GOOGLE_BACKUP_API_KEY"))
	
	res, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch books: %w", err)
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("failed to fetch books, status code: %d", res.StatusCode)
	}

	var result struct {
		ID			string				`json:"id"`
		VolumeInfo 	models.VolumeInfo	`json:"volumeInfo"`
		SaleInfo	models.SaleInfo		`json:"saleInfo"`
		AccessInfo 	models.AccessInfo	`json:"accessInfo"`
	}

	if err := json.NewDecoder(res.Body).Decode(&result); err != nil {
		return nil, fmt.Errorf("failed to decode response: %w", err)
	}

	if result.ID == "" {
		return nil, fmt.Errorf("no books found with ID %v", id)
	}

	book := &models.Book{
		ID:         result.ID,
		VolumeInfo: result.VolumeInfo,
		SaleInfo: 	result.SaleInfo,
		AccessInfo: result.AccessInfo,
	}

	return book, nil
}

