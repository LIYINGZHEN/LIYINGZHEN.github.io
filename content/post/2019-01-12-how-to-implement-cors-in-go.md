---
layout: post
title: "How to Implement CORS in Go"
date: 2019-01-12T10:42:23+01:00
author: "Max"
published: true
tags:
    - Golang
---

CORS is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.

---

First, we need to create a cors function (middleware).

```go
func cors(f http.HandlerFunc) http.HandlerFunc { 
  return func(w http.ResponseWriter, r *http.Request) { 
    w.Header().Set("Access-Control-Allow-Origin", "*") 
    f(w, r) 
  } 
}
```

This pattern takes in an http.HandlerFunc type and returns a new one that sets the appropriate header before calling the passed-in function. Now, we can modify our code to make sure that the cors function gets called for both of our endpoints.

```go
http.HandleFunc("/journeys", cors(func(w http.ResponseWriter, r *http.Request) { 
  respond(w, r, meander.Journeys) 
}))
```

