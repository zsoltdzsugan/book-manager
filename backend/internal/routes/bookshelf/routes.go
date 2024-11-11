package bookshelf

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/zsoltdzsugan/book-manager/internal/store"
	"github.com/zsoltdzsugan/book-manager/internal/utils"
)

type Handler struct {
	store store.Storage
}

func NewHandler(store store.Storage) *Handler {
	return &Handler{store: store}
}


func (h *Handler) RegisterRoutes(router chi.Router)  {
	router.Get("/bookshelves/{id}", h.handleGetBookshelf)
	router.Get("/users/{userID}/bookshelves", h.handleGetBookshelvesByUserID)
}

func (h *Handler) handleGetBookshelf(w http.ResponseWriter, r *http.Request)  {
	id := chi.URLParam(r, "id")
	bookshelf, err := h.store.Bookshelf.GetByID(r.Context(), id)
	if err != nil {
		utils.WriteError(w, http.StatusNotFound, err)
		return
	}

	utils.WriteJSON(w, http.StatusOK, bookshelf)
}

func (h *Handler) handleGetBookshelvesByUserID(w http.ResponseWriter, r *http.Request)  {
	userIDString := chi.URLParam(r, "userID")

	userID, err := strconv.ParseInt(userIDString, 10, 64) //base10, 64bits
	if err != nil {
		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("invalid user ID:%v", err))
		return
	}

	bookshelves, err := h.store.Bookshelf.GetByUserID(r.Context(), userID)
	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusOK, bookshelves)
}