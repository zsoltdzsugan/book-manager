package auth

import (
	"fmt"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"github.com/zsoltdzsugan/book-manager/internal/env"
)

func CreateJWT(secret []byte, userID int64) (string, error) {
	expiration := time.Second * time.Duration(env.GetInt("JWT_EXPIRATION_IN_SECONDS", 3600))
	
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"userID": userID,
		"expiredAt": time.Now().Add(expiration).Unix(),
	})

	tokenString, err := token.SignedString(secret)
	if err != nil {
		return "", err
	}

	return tokenString, nil
}

func AuthenticateUserToken(r *http.Request) (int64, error) {
	cookie, err := r.Cookie("token")
	if err != nil {
		return 0, fmt.Errorf("unauthorized")
	}

	token, err := jwt.Parse(cookie.Value, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(env.GetString("JWT_SECRET", "default-secret-for-jwt-token")), nil
	})

	if err != nil || !token.Valid {
		return 0, fmt.Errorf("invalid token")
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok || !token.Valid {
		return 0, fmt.Errorf("invalid token claims")
	}
	userID := int64(claims["userID"].(float64))
	return userID, nil
}