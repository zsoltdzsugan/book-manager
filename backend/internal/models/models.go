package models

import (
	"time"
)

type RegisterUserPayload struct {
	FirstName 	string 		`json:"first_name" validate:"required"`
	LastName 	string 		`json:"last_name" validate:"required"`
	Username	string 		`json:"username" validate:"required"`
	Email		string 		`json:"email" validate:"required,email"`
	Password	string 		`json:"password" validate:"required,min=4,max=130"`
}

type LoginUserPayload struct {
	Email		string 		`json:"email" validate:"required,email"`
	Password	string 		`json:"password" validate:"required"`
}

type User struct {
	ID 			int64 		`json:"id"`
	FirstName 	string 		`json:"first_name"`
	MiddleName 	string 		`json:"middle_name,omitempty"`
	LastName 	string 		`json:"last_name"`
	Username	string 		`json:"username,omitempty"`
	Email		string 		`json:"email"`
	Password	string 		`json:"-"`
	Birthdate	time.Time	`json:"birth_date,omitempty"`
	Gender     	string    	`json:"gender,omitempty"`
	// Country		string		`json:"country,omitempty"`
	CreatedAt 	time.Time 	`json:"created_at"`
	UpdatedAt 	time.Time 	`json:"updated_at"`
}

type Book struct {
	ID                 	string      `json:"id"`
	VolumeInfo			VolumeInfo 	`json:"volumeInfo"`
	SaleInfo			SaleInfo	`json:"saleInfo"`
	AccessInfo			AccessInfo	`json:"accessInfo"`
}

// Book Information
type VolumeInfo struct {
	Title              	string             	 `json:"title"`
	Subtitle           	string             	 `json:"subtitle"`
	Authors            	[]string           	 `json:"authors"`
	Description        	string             	 `json:"description,omitempty"`
	IndustryIdentifiers []IndustryIdentifier `json:"industryIdentifiers"`
	Categories			[]string			 `json:"categories"`
	PublishedDate      	string             	 `json:"publishedDate"`
	PageCount          	int                	 `json:"pageCount,omitempty"`
	ImageLinks         	*ImageLinks        	 `json:"imageLinks,omitempty"`
	AverageRating      	float64            	 `json:"averageRating,omitempty"`
	RatingsCount      	int64            	 `json:"ratingsCount,omitempty"`
	Language           	string             	 `json:"language,omitempty"`
	PreviewLink        	string             	 `json:"previewLink,omitempty"`
	InfoLink           	string             	 `json:"infoLink,omitempty"`
}

type SaleInfo struct {
	Country		string		`json:"country"`
	Saleability	string		`json:"saleability"`	// "FREE", "NOT_FOR_SALE"
	BuyLink		string		`json:"buyLink,omitempty"`
}

type AccessInfo struct {
	Country				string			`json:"country"`
	Viewability			string			`json:"viewability"`	// "FREE", "PARTIAL", "NO PAGES",
	Epub				*EbookFormat	`json:"epub"`
	Pdf					*EbookFormat	`json:"pdf"`
	WebReaderLink		string			`json:"webreaderlink,omitempty"`
	AccessViewStatus	string			`json:"accessviewstatus"`
}

type EbookFormat struct {
	IsAvailable		bool	`json:"isAvailable"`
	DownloadLink	string	`json:"downloadLink,omitempty"`
	AcsTokenLink	string	`json:"acsTokenLink,omitempty"`
}

type ImageLinks struct {
	SmallThumbnail 	string	`json:"smallThumbnail,omitempty"`
	Thumbnail      	string	`json:"thumbnail,omitempty"`
	Small      		string	`json:"small,omitempty"`
	Medium      	string	`json:"medium,omitempty"`
	Large      		string	`json:"large,omitempty"`
}

type IndustryIdentifier struct {
	Type       string `json:"type"`
	Identifier string `json:"identifier"`
}

type Rating struct {
	BookID     	string  `json:"book_id"`
	Average    	float64 `json:"average"`
	ReviewCount int     `json:"review_count"`
}

type Review struct {
	ID        int       `json:"id"`
	UserID    int       `json:"user_id"`
	BookID    string    `json:"book_id"`
	Rating    float64   `json:"rating"`
	Comment   string    `json:"comment"`
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
}

type Bookshelf struct {
	ID          string    `json:"id"`         
	UserID      int64	  `json:"user_id"`
	Title       string    `json:"title"`      
	CreatedAt   time.Time `json:"created_at"`
	UpdatedAt   time.Time `json:"updated_at"`
}

type BookshelfVolume struct {
	BookshelfID string 		`json:"bookshelf_id"`
	BookID      string 		`json:"book_id"`
	CreatedAt	time.Time	`json:"created_at"`
}