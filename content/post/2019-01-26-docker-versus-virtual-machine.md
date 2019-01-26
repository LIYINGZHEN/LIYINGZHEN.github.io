---
title:       "Docker versus Virtual Machine (VM)"
description: " "
date:        2019-01-26T11:36:00+01:00
author:      "Max"
published:   true
tags:        ["docker"]
categories:  ["docker"]
---

Looking at the description of Docker so far, we might wonder if it is yet another Virtual Machine. However, this is not the case, because a VM requires us to run a complete guest OS on top of our machine, or hypervisor, as well as all the required binaries. In the case of Docker, we use OS level virtualization, which allows us to run our containers in isolated user spaces.

The biggest advantage of a VM is that we can run different types of OSes on a system, for example, Windows, FreeBSD, and Linux. However, in the case of Docker, we can run any flavor of Linux, and the only limitation is that it has to be Linux:


![c6fa5f9a-7c70-4dd4-99be-a7baebfe3499](https://user-images.githubusercontent.com/11765228/51786002-c78c1680-215e-11e9-8cbe-e43f7e34f986.png)
Docker container versus VM


The biggest advantage of Docker containers is that since it runs natively on Linux as a discrete process making it lightweight and unaware of all the capabilities of the host OS.
