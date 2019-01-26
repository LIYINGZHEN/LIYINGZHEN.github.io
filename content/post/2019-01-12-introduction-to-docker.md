---
title:       "Introduction to Docker"

description: " "
date:        2019-01-12T20:34:17+01:00
author:      "Max"
published:   true

tags:        ["docker"]
---

## Introducing Docker

Docker is a container tool that utilizes Linux kernel features such as cgroups and namespaces to provide isolation of network, file, and memory resources without resorting to a full virtual machine.

## Why use Docker?

Docker gives us the ability to create an immutable release that will run anywhere, regardless of what is or is not installed on the target environxment.

## Commands

Delete all Docker containers:

```
docker rm $(docker ps -a -q)
```

Delete all Docker images

```
docker rmi $(docker images -q)
```

```bash
docker run -it --rm -v $(pwd):/src -p 8080:8080 -w /src golang:alpine /bin/sh
```

- `--rm` The --rm flag tells the Docker engine to remove the container and delete any resources such as volumes it was using on exit.w
- `--it` The -it flags stand for interactive terminal it maps the standard in from your terminal to the input of the running container.
- `-v` The -v, or --volume parameter allows you to specify a pair of values corresponding to the file system you wish to mount on the host and the path where you would like to mount the volume inside the container.
- `-p`
- `-w` The -w flag we are passing is to set the working directory that means that any command we run in the container will be run inside this folder.
