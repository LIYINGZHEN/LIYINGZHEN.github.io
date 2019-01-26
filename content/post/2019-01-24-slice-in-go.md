---
title:       "Slice in Go"

description: " "
date:        2019-01-24T07:07:00+01:00
author:      "Max"
published:   true

tags:        ["golang", "fundamental"]
---

Slices are an incredibly important data structure in Go. They form the basis for how we manage and manipulate data in a flexible, performant and dynamic way. It is incredibly important for all Go programmers to learn how to uses slices.

# Notes

- Slices are like dynamic arrays with special and built-in functionality.
- There is a difference between a slices length and capacity and they each service a purpose.
- Slices allow for multiple "views" of the same underlying array.
- Slices can grow through the use of the built-in function append.
