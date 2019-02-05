---
title:       "Docker Commands"
description: " "
date:        2019-01-26T11:47:00+01:00
author:      "Max"
published:   true
tags:        ["docker", "commands"]
categories:  ["docker"]
---

```bash
# Build and name our docker image
docker build
  -t maxlivinci/my-image #
  .
#
docker run
  -it              # shell
  --name pg        #
  -e NAME=Sam      # environment variable
  -p 5432:5432     # ports
  -d               # detached
  --rm             #
  postgres:version
#
docker inspect pg
#
docker exec -it pg sh | bash
# Remove old images
docker rmi -f 'docker images -q -f dangling=true'
# Stop all containers
docker stop $(docker ps -a -q)
# Remove all containers
docker rm $(docker ps -a -q)
# Remove unused data
docker system prune -a -f
#
docker ps
    -a #
#
docker logs
#
docker commit id
#
docker tag id maxlivinci/iamge:1.01
# 
docker-machine ls
```
