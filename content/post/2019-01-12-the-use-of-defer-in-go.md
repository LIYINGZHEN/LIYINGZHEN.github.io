---
title:       "The Use of Defer in Go"

description: " "
date:        2019-01-12T14:01:17+01:00
author:      "Max"
published:   false

tags:        ["golang"]
---

The defer keyword postpones the execution of a function until the surrounding function returns.

## LIFO

It is very important to remember that deferred functions are executed in Last In First Out (LIFO) order after the return of the surrounding function.
