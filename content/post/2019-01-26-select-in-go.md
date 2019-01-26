---
title:       "The select keyword"
subtitle:    ""
description: ""
date:        2019-01-26T09:24:00+01:00
author:      "Max"
published:   false
image:       ""
tags:        ["golang"]
---

`select` allows a goroutine to wait on multiple communications operations. Therefore, the main benefit that you receive from select is that it gives you the power to work with multiple channels using a single select block. As a consequence, you can have nonblocking operations on channels.
