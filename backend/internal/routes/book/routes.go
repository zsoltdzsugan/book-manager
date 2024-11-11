package book

import (
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/zsoltdzsugan/book-manager/internal/service"
	"github.com/zsoltdzsugan/book-manager/internal/utils"
)

type Handler struct {
	service		service.Service
}

func NewHandler(service service.Service) *Handler {
	return &Handler{service: service}
}

func (h *Handler) RegisterRoutes(router chi.Router)  {
	router.Get("/books/{query}", h.handleGetBooks)
	router.Get("/books/genre/{genre}", h.handleGetBooksByGenre)
	router.Get("/book", h.handleGetBook)
	router.Get("/book/{id}", h.handleGetBookByID)
	router.Get("/book/genre/{genre}", h.handleGetBookByGenre)
}

func (h *Handler) handleGetBooks(w http.ResponseWriter, r *http.Request)  {
	keyword := chi.URLParam(r, "query")

	bks, err := h.service.Book.GetAll(r.Context(), keyword, 0)
	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusOK, bks)
}

func (h *Handler) handleGetBooksByGenre(w http.ResponseWriter, r *http.Request)  {
	bookLimit := 8
	genre := chi.URLParam(r, "genre")

	bks, err := h.service.Book.GetAll(r.Context(), genre, bookLimit)
	if err != nil {
		log.Printf("Error fetching books for genre %s: %v", genre, err)
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusOK, bks)
}

func (h *Handler) handleGetBook(w http.ResponseWriter, r *http.Request)  {
	bk, err := h.service.Book.GetOneByKeyword(r.Context(), "")
	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusOK, bk)
}

func (h *Handler) handleGetBookByGenre(w http.ResponseWriter, r *http.Request)  {
	genre := chi.URLParam(r, "genre")

	bk, err := h.service.Book.GetOneByKeyword(r.Context(), genre)
	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusOK, bk)
}

func (h *Handler) handleGetBookByID(w http.ResponseWriter, r *http.Request)  {
	id := chi.URLParam(r, "id")

	bk, err := h.service.Book.GetOneByID(r.Context(), id)
	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	utils.WriteJSON(w, http.StatusOK, bk)
}