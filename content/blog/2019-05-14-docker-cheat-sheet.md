---
title:       "Docker Cheat Sheet"
date:        2019-05-14T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["docker"]
ref:
---

## Docker Container

**List all containers**

```bash
docker ps
  -a      # include stopped
  -q      # only returns the container IDs
```

**Run a shell inside an existing container**

```bash
docker exec
  -it         # connect the container to terminal
  <container>
  <command>   # bin/sh, bin/bash
```

**Starting a stopped container**

```bash
docker start <container>
```

# Print a container’s logs

```bash
docker logs
  -f               # tail
  -t               # timestamps
  <container>
```

**Restarting a stopped container**

```bash
docker restart <container>
```

**Getting additional information about a container**

```bash
docker inspect
  -f '{{ .NetworkSettings.IPAddress }}'   # selectively query.
  <container>
```

**Stop the running Docker container**

```bash
docker stop <container>
```

**Remove exited containers**

```bash
docker rm -f $(docker container ls -f "status=exited" -q)
```

**Remove all containers**

```bash
docker rm -f $(docker ps -aq)
```

**Show the history of an image**

```bash
docker history <container-id>
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
  --name <name>             # name the containe
  -e NAME=Sam               # environment variable
  -p 5000:80                # expose port 5000 externally and map to port 80
  -d                        # run in the background
  --rm                      # remove container automatically after it exits
  --restart=always          #
  --link <container-name>   #
  <image>:<tag>
```

**Debug an image**

```bash
docker run -it <image> /bin/bash
```

**List images**

```bash
docker images ls
```

**Remove an image**

```bash
docker rmi <image-name>
```

**Remove all images**

```bash
sudo docker rmi `docker images -a -q`
```

**Pulling a image**

```bash
docker pull <dockerhub-id>/<image-name>:<version>
```

**Pushing a image to DockerHub**

```bash
docker push <dockerhub-id>/<image-name>:<version>
```

## Docker Network

**List the networks**

```bash
docker network ls
```

**Creating a Docker network**

```bash
docker network create
  -d <driver>         #
  <newwork>
```

**Inspect the network**

```bash
docker network inspect <newwork>
```

**Adding a new container to the network**

```bash
docker network connect <newwork> <container>
```

**Disconnecting a host from a network**

```bash
docker network disconnect <newwork> <container>
```

## Docker Volume

**List volumes**

```bash
docker volume ls
```

**Remove volume**

```
docker volume rm <volume>
```

**Volumes Detail**

```bash
docker volume inspect <volume>
```

**Remove unused volumes using docker volume prune**

```bash
docker volume prune
```

## Dockerfile

```yaml
# Sets the Base Image for subsequent instructions.
FROM

# Apply key/value metadata to your images, containers, or daemons.
LABEL key="value"

# Sets environment variable.
ENV KEY VALUE

# Cxecute any commands in a new layer on top of the current image and commit the results.
RUN

# The WORKDIR instruction provides a way to set the working directory for the container and
# the ENTRYPOINT and/or CMD to be executed when a container is launched from the image.
WORKDIR

# Use COPY unless you sure you need ADD
# The key difference is that the COPY instruction is purely focused on copying local files from the build context and does not have any extraction or decompression capabilities.
COPY

ADD

# Creates a mount point for externally mounted volumes or other containers.
VOLUME ["/opt/project"]

# The ARG instruction defines variables that can be passed at build-time via the docker build command.
ARG webapp_user=user

# Configures a container that will run as an executable.
EXPOSE 80

# Any arguments we specify on the docker run command line will
# be passed as arguments to the command specified in the ENTRYPOINT.
ENTRYPOINT ["/usr/sbin/nginx"]

# The CMD instruction specifies the command to run when a container is launched.
# We can override the CMD instruction on the docker run command line.
CMD ["-h"]
```
