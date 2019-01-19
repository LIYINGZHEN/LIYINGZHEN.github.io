---
title:       "Building an API server with Go"
subtitle:    ""
description: ""
date:        2019-01-15T19:41:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["Golang"]
---

## File Structures

```
main.go
service/
  handlers_test.go
  handlers.go
  server.go
  middleware.go
  types.go
```

## Libraries introduction

- gorilla/mux -> A powerful URL router and dispatcher for golang
- unrolled/render -> Go package for easily rendering JSON responses.
- codegangsta/negroni -> Idiomatic HTTP Middleware for Golang

## Install Dependencies

```
go get github.com/urfave/negroni
go get github.com/gorilla/mux
go get github.com/unrolled/render
```

## Create our types

In service folder create `types.go`

```go
package service

type fulfillmentStatus struct {
  SKU             string `json:"sku"`
  ShipsWithin     int    `json:"ships_within"`
  QuantityInStock int    `json:"qty_in_stock"`
}
```

## TDD 

In service folder create `handlers_test.go`

```go
package service

import (
  "encoding/json"
  "io/ioutil"
  "net/http"
  "net/http/httptest"
  "testing"

  "github.com/unrolled/render"
)

var (
  formatter = render.New(render.Options{
    IndentJSON: true,
  })
)

func TestGetFullfillmentStatusReturns200ForExistingSKU(t *testing.T) {
  var (
    request  *http.Request
    recorder *httptest.ResponseRecorder
	)

  server := NewServer()

  targetSKU := "THINGAMAJIG12"

  recorder = httptest.NewRecorder()
  request, _ = http.NewRequest("GET", "/skus/"+targetSKU, nil)
  server.ServeHTTP(recorder, request)

  var detail fulfillmentStatus

  if recorder.Code != http.StatusOK {
    t.Errorf("Expected %v; received %v", http.StatusOK, recorder.Code)
  }
  payload, err := ioutil.ReadAll(recorder.Body)
  if err != nil {
    t.Errorf("Error parsing response body: %v", err)
  }
  err = json.Unmarshal(payload, &detail)
  if err != nil {
    t.Errorf("Error unmarshaling response to fullfillment status: %v", err)
  }

  if detail.QuantityInStock != 100 {
    t.Errorf("Expected 100 qty in stock, got %d", detail.QuantityInStock)
  }
  if detail.ShipsWithin != 14 {
    t.Errorf("Expected shipswithin 14 days, got %d", detail.ShipsWithin)
  }
  if detail.SKU != "THINGAMAJIG12" {
    t.Errorf("Expected SKU THINGAMAJIG12, got %s", detail.SKU)
  }
}
```

## Create our handlers

In service folder create `handlers.go`

```go
package service

import (
  "net/http"

  "github.com/gorilla/mux"
  "github.com/unrolled/render"
)

// getFullfillmentStatusHandler simulates actual fulfillment by supplying bogus values for QuantityInStock
// and ShipsWithin for any given SKU. Used to demonstrate a backing service supporting
// a primary service.
func getFullfillmentStatusHandler(formatter *render.Render) http.HandlerFunc {
  return func(w http.ResponseWriter, req *http.Request) {
    vars := mux.Vars(req)
    sku := vars["sku"]
    formatter.JSON(w, http.StatusOK, fulfillmentStatus{
      SKU:             sku,
      ShipsWithin:     14,
      QuantityInStock: 100,
    })
  }
}

func rootHandler(formatter *render.Render) http.HandlerFunc {
  return func(w http.ResponseWriter, req *http.Request) {
    formatter.Text(w, http.StatusOK, "Fulfillment Service, see http://github.com/cloudnativego/backing-fulfillment for API.")
  }
}
```

## Create our server

In service folder create `server.go`

```go
package service

import (
  "github.com/codegangsta/negroni"
  "github.com/gorilla/mux"
  "github.com/unrolled/render"
)

// NewServer configures and returns a Server.
func NewServer() *negroni.Negroni {
  formatter := render.New(render.Options{
    IndentJSON: true,
  })

  n := negroni.Classic()
  
  // Public Routes
  router := mux.NewRouter()

  initPublicRoutes(router, formatter)
  apiRouter := getAPIRouter(formatter)

  router.PathPrefix("/api").Handler(
    negroni.New(
      negroni.HandlerFunc(isAuthorized(formatter)), 
      negroni.Wrap(apiRouter), 
    )
  )

  n.UseHandler(router)
  return n
}

func initPublicRoutes(mx *mux.Router, formatter *render.Render) {
  mx.PathPrefix("/images/").Handler(http.StripPrefix("/images/", http.FileServer(http.Dir("./assets/images/")))) 
  mx.PathPrefix("/css/").Handler(http.StripPrefix("/css/", http.FileServer(http.Dir("./assets/css/"))))
}

func getAPIRouter(formatter *render.Render) {
  apiRouter := mux.NewRouter()
  apiRouter.HandleFunc("/", rootHandler(formatter)).Methods("GET")
  apiRouter.HandleFunc("/skus/{sku}", getFullfillmentStatusHandler(formatter)).Methods("GET")
  return apiRouter
}
```

## Create Middlewares

```go
func isAuthorized(formatter *render.Render) negroni.HandlerFunc {
	apikey := os.Getenv(APIKey)
	return func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
		providedKey := r.Header.Get(APIKey)
		if providedKey == "" {
			formatter.JSON(w, http.StatusUnauthorized, struct{ Error string }{"Unauthorized."})
		} else if providedKey != apikey {
			formatter.JSON(w, http.StatusForbidden, struct{ Error string }{"Insufficient credentials."})
		} else {
			next(w, r)
		}
	}
}
```

## Main app entry point

In our root folder create a `main.go`

```go
package main

import (
  "os"

  service "github.com/cloudnativego/backing-fulfillment/service"
)

func main() {
  port := os.Getenv("PORT")
  if len(port) == 0 {
    port = "3001"
  }

  // Ordinarily we'd use a CF environment here, but we don't need it for
  // the fake data we're returning.
  server := service.NewServer()
  server.Run(":" + port)
}
```