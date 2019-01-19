---
title:       "Error in Go"
subtitle:    ""
description: ""
date:        2019-01-19T15:57:00+01:00
author:      "Max"
image:       ""
tags:        ["golang"]
---

## Error handling

Error handling is a very important feature of Go because almost all Go functions return an error message or nil, which is the Go way of saying whether there was an error condition while executing a function or not.

```go
if err != nil { 
  log.Println(err)
  os.Exit(10) 
} 
```