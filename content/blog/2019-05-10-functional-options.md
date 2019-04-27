---
title:       "Functional options"
date:        2019-05-10T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
ref:
---

Here's the simplest example showing how to do functional options in Golang.

They're a great way to enable users to set options and ease adding new options later.

```go
package main

import (
	"flag"
	"fmt"
)

// This is your function used by users to set options.
func Host(host string) func(*Server) {
	return func(s *Server) {
		s.Host = host
	}
}

// This is another function used by users to set options.
func Port(port int) func(*Server) {
	return func(s *Server) {
		s.Port = port
	}
}

// This is the type whose options you're enabling users to set.
type Server struct {
	Host string
	Port int
}

// This is your creator function that accepts a list of option functions.
func NewServer(opts ...func(*Server)) *Server {
	s := &Server{}

	// call option functions on instance to set options on it
	for _, opt := range opts {
		opt(s)
	}

	return s
}

func main() {
	var host = flag.String("host", "127.0.0.1", "host")
	var port = flag.Int("port", 8000, "port")
	flag.Parse()

	// This is how your user sets the options.
	s := NewServer(
		Host(*host),
		Port(*port),
	)

	fmt.Printf("server host: %s, port: %d", s.Host, s.Port)
}
```
