---
title:       "The Basic HTTP Example"

description: " "
date:        2019-01-12T15:37:17+01:00
author:      "Max"
published:   true

tags:        ["golang"]
---

Building a web server in Go is incredibly easy thanks to the HTTP package, which is distributed as part of the standard library.

```go
func main() {
  port := 8080

  http.HandleFunc("/", helloWorldHandler)
  log.Printf("Server starting on port %v\n", 8080)
  log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", port), nil))
}

func helloWorldHandler(w http.ResponseWriter, r *http.Request) {
  fmt.Fprint(w, "Hello World\n")
}
```

- The `HandleFunc` method creates a Handler type on the `DefaultServeMux` handler, mapping the path passed in the first parameter to the function in the second parameter.

```
http.ListenAndServe(fmt.Sprintf(":%v", port), nil)
```

- The second parameter we are passing is `nil`, this is because we are using the DefaultServeMux handler, which we are setting up with our call to http.HandleFunc.

