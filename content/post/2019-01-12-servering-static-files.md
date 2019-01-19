---
title:       "Serving Static Files In Go"
subtitle:    ""
description: ""
date:        2019-01-12T17:15:17+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["golang"]
---

```go
func main() {
  port := 8080
  cathandler := http.FileServer(http.Dir("./images"))
  // images/...
  http.Handle("/cat/", http.StripPrefix("/cat/", cathandler))
  // images/cat/...
  http.Handle("/cat/", cathandler)
  log.Printf("Server starting on port %v\n", 8080)
  log.Fatal(http.ListenAndServe(fmt.Sprintf(":%v", port), nil))
}
```