---
title:       "Unix Signals"
subtitle:    ""
description: ""
date:        2019-01-25T20:34:00+01:00
author:      "Max"
published:   true
image:       ""
tags:        ["cs"]
---

- Ctrl + C sends the SIGINT signal

- number 1 SIGTERM

- number 9 SIGKILL

```go
package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func handle(signal os.Signal) {
	fmt.Println("Received:", signal)
}

func main() {
	sigs := make(chan os.Signal, 1)
	signal.Notify(sigs)

	go func() {
		for {
			sig := <-sigs
			switch sig {
			case os.Interrupt:
				handle(sig)
			case syscall.SIGTERM:
				handle(sig)
				os.Exit(0)
			case syscall.SIGUSR2:
				fmt.Println("Handling syscall.SIGUSR2!")
			default:
				fmt.Println("Ignoring:", sig)
			}
		}
	}()

	for {
		fmt.Printf(".")
		time.Sleep(30 * time.Second)
	}
}
```
