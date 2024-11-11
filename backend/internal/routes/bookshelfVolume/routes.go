package bookshelfVolume

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/zsoltdzsugan/book-manager/internal/models"
	"github.com/zsoltdzsugan/book-manager/internal/store"
	"github.com/zsoltdzsugan/book-manager/internal/utils"
)

type Handler struct {
	store	store.Storage
}

func NewHandler(store store.Storage) *Handler {
	return &Handler{store: store}
}

func (h *Handler) RegisterRoutes(router chi.Router)  {
	router.Post("/bookshelves/{bookshelfID}/volumes/{bookID}", h.handleAddToBookshelf)
	router.Get("/bookshelves/{bookshelfID}/volumes", h.handleGetBookshelfVolumes)
	router.Delete("/bookshelves/{bookshelfID}/volumes/{bookID}", h.handleRemoveFromBookshelf)
}

func (h *Handler) handleAddToBookshelf(w http.ResponseWriter, r *http.Request) {
	bookshelfID := chi.URLParam(r, "bookshelfID")
	bookID := chi.URLParam(r, "bookID")
	
	payload := models.BookshelfVolume{
		BookshelfID: 	bookshelfID,
		BookID: 		bookID,
	}

	log.Printf("bookshelfID: %v", payload.BookshelfID)
	log.Printf("bookID: %v", payload.BookID)

	if err := h.store.BookshelfVolume.AddToBookshelf(r.Context(), &payload); err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusCreated, payload)
}

func (h *Handler) handleGetBookshelfVolumes(w http.ResponseWriter, r *http.Request) {
	bookshelfID := chi.URLParam(r, "bookshelfID")
	log.Printf("Fetching volumes for bookshelf ID: %s", bookshelfID)
	volumes, err := h.store.BookshelfVolume.GetByBookshelfID(r.Context(), bookshelfID)
	if err != nil {
		log.Printf("Error retrieving volumes: %v", err)
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusOK, volumes)
}

func (h *Handler) handleRemoveFromBookshelf(w http.ResponseWriter, r *http.Request) {
	bookshelfID := chi.URLParam(r, "bookshelfID")
	bookID := chi.URLParam(r, "bookID")

	if err := h.store.BookshelfVolume.RemoveFromBookshelf(r.Context(), bookshelfID, bookID); err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusNoContent, nil) // No content to return on successful deletion
}