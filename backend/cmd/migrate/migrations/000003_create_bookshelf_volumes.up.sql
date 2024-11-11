CREATE TABLE bookshelf_volumes (
    bookshelf_id INT REFERENCES bookshelves(id) ON DELETE CASCADE,
    book_id VARCHAR(255),
    PRIMARY KEY (bookshelf_id, book_id),
    created_at TIMESTAMP(0) WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP(0) WITH TIME ZONE NOT NULL DEFAULT NOW()
);