---
title:       "Strings in Go"
description: " "
date:        2019-01-27T09:49:39+01:00
author:      "Max"
published:   true
tags:        ["golang"]
categories:  ["Go"]
---

# Contains

```go
strings.Contains(s, "this")
```

# ContainsAny

```go
strings.ContainsAny(s, "abc")
```

# Split

```GO
strings.Split(s, " ")
```

# TrimSpace

```go
s = " simple string "
strings.TrimSpace(s)
```

# NewReader

```go
s := "simple string\n"
r := strings.NewReader(s)
```

# HasPrefix

```go
strings.HasPrefix(s, "this")
```

# HasSuffix

```GO
strings.HasSuffix(s, "test")
```
