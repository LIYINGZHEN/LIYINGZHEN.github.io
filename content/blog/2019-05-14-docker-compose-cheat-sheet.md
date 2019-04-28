---
title:       "Docker Compose Cheat Sheet"
date:        2019-05-14T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["docker"]
ref:
---

## docker-compose.yml

```yaml
version: '3'
  services:
    web:
      image: jamtur01/composeapp
      command: python app.py
      ports:
      - "5000:5000"
      volumes:
      - .:/composeapp
    redis:
      image: redis
```

## Commands

```bash
# Lists all of the currently running services.
docker-compose ps
# Show log events.
docker-compose logs
# Stop running services.
docker-compose stop
# Force kill the services.
docker- compose kill
# Restart services.
docker-compose start
# Remove services.
docker-compose rm
```
