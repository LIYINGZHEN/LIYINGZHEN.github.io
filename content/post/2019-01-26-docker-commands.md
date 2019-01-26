---
title:       "Docker Commands"

description: " "
date:        2019-01-26T11:47:00+01:00
author:      "Max"
published:   true

tags:        ["docker"]
---

```bash
# Build and name our docker image
docker build . -t hello-uncle
# Run the docker image with environment variables
docker run hello-uncle -e NAME=Sam
# Remove old images
docker rmi -f 'docker images -q -f dangling=true'
# Stop all containers
docker stop $(docker ps -a -q)
# Remove all containers
docker rm $(docker ps -a -q)
# Remove unused data
docker system prune -a -f
```
