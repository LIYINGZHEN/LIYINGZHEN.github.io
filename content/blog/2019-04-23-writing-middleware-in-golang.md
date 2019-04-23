---
title:       "Writing middleware in Golang"
date:        2019-04-23T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

When we talk about Middleware in Go, at its simplest, we are really talking about running code before and/or after our handler code in a HTTP request lifecycle. For example, logging middleware might write the incoming request details to a log, then call the handler code, before writing details about the response to the log. One of the cool things about middleware, if implemented correctly, is that these units are extremely flexible, reusable, and sharable.

Keeping HTTP handling code to a simple signature (w http.ResponseWriter, r *http.Request) means that any Go programmer can come to your code, and jump right in without having to learn too much about the code.

Rather than writing functions or types that take in an http.HandlerFunc (or http.Handler) and return a wrapper alternative, we are going to represent this idea in a type of its own.

## Adapter type

```go
type Adapter func(http.Handler) http.Handler
```

The Adapter type (it gets its name from the adapter pattern — also known as the decorator pattern) above is a function that both takes in and returns an http.Handler. This is the essence of the wrapper; we will pass in an existing http.Handler, the Adapter will adapt it, and return a new (probably wrapped) http.Handler for us to use in its place. So far this is not much different from just wrapping http.HandlerFunc types, however, now, we can instead write functions that themselves return an Adapter.

The following example is going to allow us to specify the log.Logger (from the standard package) that we want our “before” and “after” strings written to.

```go
func Notify(logger *log.Logger) Adapter {
  return func(h http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
      logger.Println("before")
      defer logger.Println("after")
      h.ServeHTTP(w, r)
    }
  }
}
```

Now, thanks to closures, we can capture the logger object inside our functions without spoiling the Adapter interface (it still takes and returns a single http.Handler).

## Using the Adapters

The simplest way (albeit somewhat confusing to read) to make use of an adapter is to get the Adapter function and immediately call it:

```go
logger := log.New(os.Stdout, "server: ", log.Lshortfile)
http.Handle("/", Notify(logger)(indexHandler))
```

A cleaner approach is to provide yourself an Adapt function, that can do all your adapting for you.

```go
func Adapt(h http.Handler, adapters ...Adapter) http.Handler
```

Our Adapt function takes the handler you want to adapt, and a list of our Adapter types. The result of our Notify function is an acceptable Adapter. Our Adapt function will simply iterate over all adapters, calling them one by one (in reverse order) in a chained manner, returning the result of the first adapter.

```go
func Adapt(h http.Handler, adapters ...Adapter) http.Handler {
  for i := len(adapters); i > 0; i-- {
    h = adapter[i](h)
  }
  return h
}
```

Assuming we have several suitable functions that return Adapters, we can then implement middleware on our handlers by calling the Adapt function:

```go
http.Handle("/",
  Adapt(
    indexHandler,
    Notify(logger),
    CopyMgoSession(db),
    CheckAuth(providers),
    AddHeader("Server", "Mine"),
  )
```

The execution for indexHandler would then run like this:

- Notify (log “before” string — maybe with some other bits)
- CopyMgoSession (copy db session and make it available to handler)
- CheckAuth (check auth cresds and bail if failed)
- AddHeader (add response header)
- indexHandler
- Any AddHeader deferred functions
- Any CheckAuth deferred functions
- CopyMgoSession deferred function (probably closing the database copy)
- Notify deferred function (writing “after” string)
