---
title:       "Understanding Docker"
description: " "
date:        2019-01-26T11:39:00+01:00
author:      "Max"
published:   true
tags:        ["docker"]
categories:  ["docker"]
---

Before we start using Docker, let's take a brief look at how the Docker is meant to be used, how it is structured, and what are the major components of the complete system.

The following list and the accompanying image should help understand the architecture of Docker pipeline:

- Dockerfile: It consists of instructions on how to build an image that runs our program.
- Docker client: This is a command-line program used by the user to interact with Docker daemon.
- Docker daemon: This is the Daemon application that listens for commands to manage building or running containers and pushing containers to Docker registry. It is also responsible for configuring container networks, volumes, and so on.
- Docker images: Docker images contain all the steps necessary to build a container binary that can be executed on any Linux machine with Docker installed.
- Docker registry: The Docker registry is responsible for storing and retrieving the Docker images. We can use a public Docker registry or a private one. Docker Hub is used as the default Docker registry.
- Docker Container: The Docker container is different from the Container we have been discussing so far. A Docker container is a runnable instance of a Docker image. A Docker container can be created, started, stopped, and so on.
- Docker API: The Docker client we discussed earlier is a command-line interface to interact - with Docker API. This means that the Docker daemon need not be running on the same machine as does the Docker client. The default setup that we will be using throughout the book talks to the Docker daemon on the local system using UNIX sockets or a network interface:

![142493fb-c42c-4468-994f-7ff76fcd91e4](https://user-images.githubusercontent.com/11765228/51786037-1afe6480-215f-11e9-9e3d-40be3a2a1e29.png)
Docker architecture
