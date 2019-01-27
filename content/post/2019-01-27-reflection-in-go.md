---
title:       "Reflection in Go"
description: " "
date:        2019-01-27T11:05:14+01:00
author:      "Max"
published:   true
tags:        ["golang"]
categories:  ["Go"]
---

Reflection is an advanced Go feature that allows you to dynamically learn the type of an arbitrary object as well as information about its structure.

# ValueOf

```go
any := interface{}
value := reflect.ValueOf(any).Elem()
r.NumField()
```
