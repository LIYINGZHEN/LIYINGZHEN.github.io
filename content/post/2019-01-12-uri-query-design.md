---
title:       "URI query design"
subtitle:    ""
description: ""
date:        2019-01-12T19:40:17+01:00
author:      "Max"
published:   false
image:       ""
tags:        ["REST"]
---

It is perfectly acceptable to use a query string as part of an API call; however, I would refrain from using this to pass data to the service. Instead the query should be used to perform actions such as:

- Paging 
- Filtering 
- Sorting