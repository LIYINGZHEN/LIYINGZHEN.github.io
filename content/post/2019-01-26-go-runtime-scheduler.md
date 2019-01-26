---
title:       "Go's runtime scheduler"
description: " "
date:        2019-01-26T16:43:00+01:00
author:      "Max"
published:   false
tags:        ["golang", fundamental"]
categories:  [ Go ]
---

The runtime uses a scheduler strategy known as M:N scheduler, which will schedule M number of goroutines on N number of OS threads.
