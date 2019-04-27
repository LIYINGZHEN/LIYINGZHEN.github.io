---
title:       "Docker Cheat Sheet"
date:        2019-05-14T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["docker"]
ref:
---

## Docker Container

**Delete all containers**

```bash
docker rm -f $(docker ps -aq)
```

**Stop a running container through SIGKILL**

```bash
docker kill web
```

## Docker Image

**Build a image**

```bash
docker build
  -t <image-name>:<tag> # name docker image
  --no-cache            # do not use cache
  .
```

**Run an image**

```bash
docker run
  -v <source>:<destination> # create a volume in our container from a directory on the host
  --net=<NETWORK>           # Creating a container inside a Docker network
  --volumes-from            #
  -it                       # connect the container to terminal
  --name <CONTAINER>        # name the containe
  -e NAME=Sam               # environment variable
  -p 5000:80                # expose port 5000 externally and map to port 80
  -d                        # run in the background
  --rm                      # remove container automatically after it exits
  --restart=always          #
  <image>:<tag>
```

**Listing images**

```bash
docker images ls
```

**Remove an image**

```bash
docker rmi <image-name>
```

**Pulling a image**

```bash
docker pull <docker-hub-id>/<image-name>:<version>
```

**Pushing a image to DockerHub**

```bash
docker push <docker-hub-id>/<image-name>:<version>
```

## Docker Network

**List the networks**

```
docker network ls
```
