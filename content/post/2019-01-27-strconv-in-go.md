---
title:       "Strconv in Go"
description: " "
date:        2019-01-27T11:03:14+01:00
author:      "Max"
published:   true
tags:        ["golang"]
categories:  ["Go"]
---

# ParseFloat

```go
strconv.ParseFloat(amount, 64)
```

# ParseInt

```go
strconv.ParseInt(result, 10, 64)
```

# FormatInt

```go
strconv.FormatInt(amount, 10)
```

# ParseInt

```go
s := "1234"
if res, err := strconv.ParseInt(s, 10, 64); err != nil {
  return err
}
```
