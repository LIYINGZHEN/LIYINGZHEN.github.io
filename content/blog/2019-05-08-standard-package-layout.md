---
title:       "Standard Package Layout"
date:        2019-05-08T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["go"]
ref: https://github.com/golang-standards/project-layout
---

```
myapp/
	cmd/
		server/
      main.go
  /internal
    http/
      middleware.go
      middleware_test.go
      route.go
      server.go
      userhandler.go
    psql/
      psql.go
      userrepository.go
    service/
      userservice/
        userservice.go
        userservice_test.go
  # Domain types
	models.go
```

## Domain types

Your application has a logical, high-level language that describes how data and processes interact. This is your domain. If you have an e-commerce application your domain involves things like customers, accounts, charging credit cards, and handling inventory. If you’re Facebook then your domain is users, likes, & relationships. It’s the stuff that doesn’t depend on your underlying technology.

## /cmd

Main applications for this project.

The directory name for each application should match the name of the executable you want to have (e.g., `/cmd/myapp`).

Don't put a lot of code in the application directory. If you think the code can be imported and used in other projects, then it should live in the /pkg directory. If the code is not reusable or if you don't want others to reuse it, put that code in the `/internal` directory. You'll be surprised what others will do, so be explicit about your intentions!

It's common to have a small `main` function that imports and invokes the code from the `/internal` and `/pkg` directories and nothing else.

See the `/cmd` directory for examples.

## /internal

Private application and library code. This is the code you don't want others importing in their applications or libraries.

You can optionally add a bit of extra structure to your internal packages to separate your shared and non-shared internal code. It's not required, but it's nice to have visual clues showing the intended package use. Your actual application code can go in the `/internal/app` directory (e.g., `/internal/app/myapp`) and the code shared by those apps in the `/internal/pkg` directory (e.g., `/internal/pkg/myprivlib`).
