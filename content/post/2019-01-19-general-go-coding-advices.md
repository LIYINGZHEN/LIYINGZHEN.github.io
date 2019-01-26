---
title:       "General Go coding advices"

description: " "
date:        2019-01-19T17:05:00+01:00
author:      "Max"
published:   true

tags:        ["golang"]
---


The following list offers practical advices that will help you write better Go code:

- If you have an error in a Go function, either log it or return it, do not do both unless you have a really good reason for doing so!
- Go interfaces define behaviors, not data and data structures.
- Use the `io.Reader` and `io.Writer` interfaces because they make your code more extensible.
- Make sure that you pass a pointer to a variable of a function only when needed. The rest of the time, just pass the value of the variable.
- Error variables are not string variables; they are error variables!
- Do not test your Go code on production machines!
- If you don't really know a Go feature, test it before using it for the first time, especially if you are developing an application or a utility that will be used by a large number of users.
- If you are afraid of making mistakes, you will most likely end up doing nothing really useful! So, experiment as much as you can!
