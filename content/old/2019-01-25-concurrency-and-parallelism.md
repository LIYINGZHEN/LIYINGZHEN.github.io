---
title:       "Concurrency and parallelism"
description: " "
date:        2019-01-25T21:08:00+01:00
author:      "Max"
published:   true
tags:        ["golang"]
categories:  [ Go ]
---

Computer and software programs are useful because they do a lot of laborious work very fast and can also do multiple things at once. We want our programs to be able to do multiple things simultaneously, that is, multitask, and the success of a programming language can depend on how easy it is to write and understand multitasking programs.

Concurrency and parallelism are two terms that we are bound to come across often when looking into multitasking and they are often used interchangeably. However, they mean two distinctly different things.

The standard definitions given on the Go blog (https://blog.golang.org/concurrency-is-not-parallelism) are as follows:

- **Concurrency**: Concurrency is about **dealing with lots of things at once**. This means that we manage to get multiple things done at once in a given period of time. However, we will only be doing a single thing at a time. This tends to happen in programs where one task is waiting and the program decides to run another task in the idle time. In the following diagram, this is denoted by running the yellow task in idle periods of the blue task.

- **Parallelism**: Parallelism is about **doing lots of things at once**. This means that even if we have two tasks, they are continuously working without any breaks in between them. In the diagram, this is shown by the fact that the green task is running independently and is not influenced by the red task in any manner:

![66b44862-4bcb-4fcb-a816-4125f4fdf8ca](https://user-images.githubusercontent.com/11765228/51789047-311f1b80-2185-11e9-8408-22df26357892.png)

It is important to understand the difference between these two terms. Let's look at a few concrete examples to further elaborate upon the difference between the two.
