package user

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-playground/validator/v10"
	"github.com/zsoltdzsugan/book-manager/internal/auth"
	"github.com/zsoltdzsugan/book-manager/internal/env"
	"github.com/zsoltdzsugan/book-manager/internal/models"
	"github.com/zsoltdzsugan/book-manager/internal/store"
	"github.com/zsoltdzsugan/book-manager/internal/utils"
)

type Handler struct {
	store store.Storage
}

func NewHandler(store store.Storage) *Handler {
	return &Handler{store: store}
}

func (h *Handler) RegisterRoutes(router chi.Router) {
	router.Post("/login", h.handleLogin)
	router.Post("/register", h.handleRegister)
	router.Post("/logout", h.handleLogout)
	router.Get("/user/info", h.handleGetUserInfo)
	router.Patch("/user/update", h.handlePatchUserInfo)
	router.Delete("/user/delete", h.handleDeleteUserInfo)
}

func (h *Handler) handleLogin(w http.ResponseWriter, r *http.Request) {
	var payload models.LoginUserPayload
	if err := utils.ParseJSON(r, &payload); err != nil {
		utils.WriteError(w, http.StatusBadRequest, err)
		return
	}

	// Validate payload
	if err := utils.Validate.Struct(payload); err != nil {
		errors := err.(validator.ValidationErrors)
		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("invalid payload %v", errors))
		return
	}

	// Get user if exists
	u, err := h.store.User.GetByEmail(r.Context(), payload.Email)
	if err != nil {
		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("not found, invalid email or password"))
		return
	}

	// Compare Passwords
	if !auth.ComparePasswords(u.Password, []byte(payload.Password)) {
		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("not found, invalid email or password1"))
		return
	}

	// Generate JWT Token
	secret := []byte(env.GetString("JWT_SECRET", "default-secret-for-jwt-token"))
	token, err := auth.CreateJWT(secret, u.ID)
	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	isSecure := env.GetBool("ISPROD", false)
	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    token,
		Path:     "/",
		HttpOnly: true,
		Secure:   isSecure,
		SameSite: http.SameSiteStrictMode, // http.SameSiteNoneMode
		MaxAge:   86400,
	})

	utils.WriteJSON(w, http.StatusOK, map[string]string{"message": "logged in", "token": token})
}

func (h *Handler) handleRegister(w http.ResponseWriter, r *http.Request) {

	var payload models.RegisterUserPayload
	if err := utils.ParseJSON(r, &payload); err != nil {
		utils.WriteError(w, http.StatusBadRequest, err)
		return
	}

	// Validate payload
	if err := utils.Validate.Struct(payload); err != nil {
		errors := err.(validator.ValidationErrors)
		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("invalid payload %v", errors))
		return
	}

	existingUser, err := h.store.User.GetByEmail(r.Context(), payload.Email)
	if err != nil {
		// If user is not found, proceed to create the new user
		if err.Error() == fmt.Sprintf("no user found with email %s", payload.Email) {
			// User does not exist, proceed with registration
		} else {
			// Some other error occurred
			utils.WriteError(w, http.StatusInternalServerError, err)
			return
		}
	} else if existingUser != nil {
		// User already exists, return a bad request
		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("user with email: %v already exists", payload.Email))
		return
	}

	// Secure password
	hashedPassword, err := auth.HashPassword(payload.Password)
	if err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
		return
	}

	fmt.Printf("Hashed Password: %s\n", hashedPassword) // Debugging line

	newUser := models.User{
		FirstName: payload.FirstName,
		LastName:  payload.LastName,
		Username:  payload.Username,
		Email:     payload.Email,
		Password:  hashedPassword,
	}

	// Create new user
	if err := h.store.User.Create(r.Context(), &newUser); err != nil {
		utils.WriteError(w, http.StatusBadRequest, err)
		return
	}

	// Create the default bookshelves for the new user
	if err := h.store.Bookshelf.Create(r.Context(), newUser.ID); err != nil {
		utils.WriteError(w, http.StatusInternalServerError, fmt.Errorf("failed to create default bookshelves: %w", err))
		return
	}

	response := map[string]interface{}{
		"user_id": newUser.ID,
		"message": "user created successfully",
	}

	if err := utils.WriteJSON(w, http.StatusCreated, response); err != nil {
		utils.WriteError(w, http.StatusInternalServerError, err)
	}
}

func (h *Handler) handleLogout(w http.ResponseWriter, r *http.Request) {
	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    "",
		Path:     "/", // Must match the login path
		HttpOnly: true,
		Secure:   env.GetBool("ISPROD", false),
		SameSite: http.SameSiteStrictMode,
		MaxAge:   -1,              // Invalidate by setting to -1
		Expires:  time.Unix(0, 0), // Additional safeguard for older browsers
	})

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Logged out successfully"))
}

func (h *Handler) handleGetUserInfo(w http.ResponseWriter, r *http.Request) {
	userID, err := auth.AuthenticateUserToken(r)
	if err != nil {
		utils.WriteError(w, http.StatusUnauthorized, err)
		return
	}
	log.Printf("USERID: %v", userID)
	// Get user from the database
	u, err := h.store.User.GetByID(r.Context(), userID)
	if err != nil {
		utils.WriteError(w, http.StatusNotFound, fmt.Errorf("user not found"))
		return
	}
	log.Printf("USER: %v", u)
	utils.WriteJSON(w, http.StatusOK, u)
}

func (h *Handler) handlePatchUserInfo(w http.ResponseWriter, r *http.Request) {
	userID, err := auth.AuthenticateUserToken(r)
	if err != nil {
		utils.WriteError(w, http.StatusUnauthorized, err)
		return
	}

	patchedUser := models.User{ID: userID}
	if err := utils.ParseJSON(r, &patchedUser); err != nil {
		log.Printf("Invalid JSON request: %v", err)
		utils.WriteError(w, http.StatusBadRequest, fmt.Errorf("invalid request"))
		return
	}

	log.Printf("new user: %v\n", patchedUser)
	if err := h.store.User.Update(r.Context(), &patchedUser); err != nil {
		log.Printf("failed to update: %v", err)
		utils.WriteError(w, http.StatusInternalServerError, fmt.Errorf("failed to update user"))
		return
	}

	utils.WriteJSON(w, http.StatusOK, map[string]string{"message": "user updated successfully"})
}

func (h *Handler) handleDeleteUserInfo(w http.ResponseWriter, r *http.Request) {
	userID, err := auth.AuthenticateUserToken(r)
	if err != nil {
		utils.WriteError(w, http.StatusUnauthorized, err)
		return
	}

	if err := h.store.User.Delete(r.Context(), userID); err != nil {
		utils.WriteError(w, http.StatusInternalServerError, fmt.Errorf("failed to delete user"))
		return
	}

	utils.WriteJSON(w, http.StatusOK, map[string]string{"message": "user deleted successfully"})
}
