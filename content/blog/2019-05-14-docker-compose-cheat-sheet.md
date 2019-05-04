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
version: "3"

services:
  voting-app:
    build: ./voting-app/.
    # bind mount
    volumes:
     - ./voting-app:/app
    ports:
      - "5000:80"
    links:
      - redis
    networks:
      - front-tier
      - back-tier

  result-app:
    build: ./result-app/.
    # bind mount
    volumes:
      - ./result-app:/app
    ports:
      - "5001:80"
    links:
      - db
    networks:
      - front-tier
      - back-tier

  worker:
    build: ./worker
    links:
      - db
      - redis
    networks:
      - back-tier

  redis:
    image: redis
    ports: ["6379"]
    networks:
      - back-tier

  db:
    image: postgres:9.4
    # docker volume
    volumes:
      - "db-data:/var/lib/postgresql/data"
    networks:
      - back-tier

volumes:
  db-data:

networks:
  front-tier:
    driver: bridge
  back-tier:
    driver: bridge
```

![Screen Shot 2019-05-04 at 15 48 19](https://user-images.githubusercontent.com/11765228/57179986-12b37500-6e84-11e9-834b-6aa59a6664e5.png)

## Commands

```bash
docker-compose
  -f <docker-compose.yaml>  # apply docker-compose file
  up
  -d                        # run in the background
# Build images.
docker-compose build
# Lists all of the currently running services.
docker-compose ps
# Show log events.
docker-compose logs
# Stop running services.
docker-compose stop
# Stops containers and removes containers, networks, volumes, and images created by up.
docker-compose down
# List images used by the created containers.
docker-compose images
# Run arbitrary commands in your services.
docker-compose exec <service> bash
# Force kill the services.
docker- compose kill
# Restart services.
docker-compose start
# Remove services.
docker-compose rm
```
