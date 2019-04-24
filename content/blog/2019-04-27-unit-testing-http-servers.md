---
title:       "Unit Testing HTTP Servers"
date:        2019-04-27T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

You’re building a web (HTTP) service in Go, and you want to unit test your handler functions. You’ve got a grip on Go’s `net/http` package, but you’re not sure where to start with testing that your handlers return the correct HTTP status codes, HTTP headers or response bodies.

Let’s walk through how you go about this, injecting the necessary dependencies, and mocking the rest.

## A Basic Handler

We’ll start by writing a basic test: we want to make sure our handler returns a HTTP 200 (OK) status code. This is our handler:

```go
package handlers

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    w.Header().Set("Content-Type", "application/json")
    io.WriteString(w, `{"alive": true}`)
}
```

And this is our test:

```go
package handlers

import (
    "net/http"
    "net/http/httptest"
    "testing"
)

func TestHealthCheckHandler(t *testing.T) {
    req, err := http.NewRequest("GET", "/health-check", nil)

	checkError(err, t)

	rr := httptest.NewRecorder()

    handler := http.HandlerFunc(HealthCheckHandler)

    handler.ServeHTTP(rr, req)

    if status := rr.Code; status != http.StatusOK {
        t.Errorf("handler returned wrong status code: got %v want %v",
            status, http.StatusOK)
    }
}
```

## Middleware Test

```go
func RequestIDMiddleware(h http.Handler) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		ctx := context.WithValue(r.Context(), "app.req.id", "12345")
		h.ServeHTTP(w, r.WithContext(ctx))
	}
	return http.HandlerFunc(fn)
}
```

And the test:

```go
func TestPopulateContext(t *testing.T) {
	req, err := http.NewRequest("GET", "/api/users", nil)

	checkError(err, t)

	testHandler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if val, ok := r.Context().Value("app.req.id").(string); !ok {
			t.Errorf("app.req.id not in request context: got %q", val)
		}
	})

	rr := httptest.NewRecorder()

	handler := RequestIDMiddleware(testHandler)

	handler.ServeHTTP(rr, req)
}
```
