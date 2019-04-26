---
title:       "Go Command link"
date:        2019-05-04T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
---

The `-X` Go linker option, which you can set with `-ldflags`, sets the value of a string variable in the Go program being linked. You use it like this: `-X main.version 1.0.0`.

A simple example: let's say you have this source file saved as hello.go.

```go
package main

import "fmt"

var who = "World"

func main() {
    fmt.Printf("Hello, %s.\n", who)
}
```

Then you can use `go run` (or other build commands like `go build` or `go install`) with the `-ldflags` option to modify the value of the who variable:

```bash
$ go run hello.go
Hello, World.
$ go run -ldflags="-X main.who CloudFlare" hello.go
Hello, CloudFlare.
```

## Do it with Docker

```dockerfile
FROM golang as builder

WORKDIR /go/src/github.com/LIYINGZHEN/my-app/

COPY app.go	.

RUN GIT_COMMIT=$(git rev-list -1 HEAD) && \
  CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo \
  -ldflags "-X main.GitCommit=$GIT_COMMIT" -o app .

FROM alpine:latest

WORKDIR /root/

COPY --from=builder /go/src/github.com/LIYINGZHEN/my-app/app .

CMD ["./app"]
```
