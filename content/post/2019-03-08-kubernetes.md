---
title:       "Kubernetes"
description: " "
date:        2019-03-08T12:00:00+00:00
author:      "Max"
published:   true
tags:        ["kubernetes"]
categories:  ["notes"]
---

# Terminology

**Minikube**: Minikube is a tool that sets up a single-node cluster that’s great for both testing Kubernetes and developing apps locally.

**Kubelet**:

**Master Node**: The master node, which hosts the Kubernetes Control Plane that controls and manages the whole Kubernetes system.

**Node**: Worker nodes that run the actual applications you deploy.

**Pod**: A Pod is a group of one or more application containers (such as Docker or rkt) and includes shared storage (volumes), IP address and information about how to run them.

**Service**: A Kubernetes Service is an abstraction layer which defines a logical set of Pods and enables external traffic exposure, load balancing and service discovery for those Pods.

# Command

```bash
# Starting a Minikube virtual machine.
minikube start

# Displaying cluster information.
kubectl cluster-info

# Using kubectl explain to discover possible API object fields.
kubectl explain pods

#
cat ~/.kube/config

#
kubectl run <deployment-name> --image=<image-name> --replicas=<number> --port=<port> --hostport=<hostport>

#
kubectl expose deployment <deployment-name> --external-ip="172.17.0.42" --port=<port> --target-port=<target-port>

#
kubectl scale --replicas=<number> deployment <deployment-name>

# Connect between our host and the kubernetes cluster.
kubectl proxy

#
kubectl apply -f service-deployment.yaml

# Show the status of the rollout.
kubectl rollout status deployment/service

# Look for existing Pods.
kubectl get pods <pod-name> -o wide
kubectl get pods <pod-name> --show-labels
# See the full descriptor of the pod.
kubectl get pods <pod-name> -o yaml
# Listing pods using a label selector
kubectl get pods -l <label-name>=<label-value>

# List the current Services.
kubectl get services | svc
# List deployments.
kubectl get deployments
# Listing cluster nodes.
kubectl get nodes
# Listing name spaces.
kubectl get ns

# Forwarding a local network port to a port in the pod.
kubectl port-forward <pod-name> 8888:8080

# View the container logs
kubectl logs -f <pod-name>

# Executing command on the container
kubectl exec <pod-name> env
# Get a shell to a running pod.
kubectl exec -it <pod-name> sh | bash

# Check application configuration.
kubectl describe pods
kubectl describe pods/<pod-name>
#
kubectl describe services
kubectl describe services/<service-name>
#
kubectl describe deployment
kubectl describe deployments/<deployments-name>
#
kubectl describe node
kubectl describe node/<node-name>

# Apply a new label
kubectl label pod <pod-name> app=v1

# Delete service.
kubectl delete service <service-name>

# Delete pod.
kubectl delete pod <pod-name>
# Deleting pods using label selectors
kubectl delete po -l rel=canary
# Deleting pods by deleting the whole namespace
kubectl delete ns custom-namespace
```

# YAML

## Pod

```yaml
apiVersion: v1
kind: Pod
# Metadata includes the name, namespace, labels, and other information about the pod.
metadata:
  # The name of the pod
  name: my-pod
  labels:
    app: webserver
# Spec contains the actual description of the pod’s contents, such as the pod’s con- tainers, volumes, and other data.
spec:
  containers:
  # Name of the containe
  - name: pod-demo
    # Container image to create the container from
    image: <image-name>
    ports:
    # The port the app is listening on
    - containerPort: 3000
      protocol: TCP
    livenessProbe:
      # A liveness probe that will perform an HTTP GET
      httpGet:
        # The path to request in the HTTP request
        path: /api/health
        port: 8080
      # Kubernetes will wait 15 seconds before executing the first probe.
      initialDelaySeconds: 30
```

`kubectl apply -f max-backend-deployment.yaml`

## Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: max-backend
  labels:
    app: max-backend
spec:
  # The desired number of pod instances.
  replicas: 5
  # The pod selector determining what pods the RC is operating on.
  selector:
    matchLabels:
      app: max-backend
  template:
    metadata:
      labels:
        app: max-backend
    spec:
      # nodeSelector tells Kubernetes to deploy this pod only to nodes containing the gpu=true label.
      nodeSelector:
        gpu: "true"
      containers:
      - name: max-backend
        image: max-docker-registry.system:5000/appbackend:<commit-hash>
        # Environment variables.
        env:
        - name:
          value:
        #
        ports:
        - name: api
          containerPort: 3030
        #
        livenessProbe:
          httpGet:
            # A liveness probe that will perform an HTTP GET
            path: /api/health
            port: 3030
          # Kubernetes will wait 15 seconds before executing the first probe.
          initialDelaySeconds: 30
          periodSeconds: 60
          failureThreshold: 2
          timeoutSeconds: 20
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3030
          initialDelaySeconds: 30
          periodSeconds: 20
          timeoutSeconds: 19
          failureThreshold: 2
```

## Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: max-backend
spec:
  type: NodePort
  ports:
    # Port is the port number which makes a service visible to other services running within the same K8s cluster
  - port: 8080
    # Target port is the port on the POD where the service is running.
    targetPort: 80
    # Node port is the port on which the service can be accessed from external users using Kube-Proxy.
    nodePort: 30001
  selector:
    app: max-backend
```

## Ingress

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: max-backend
spec:
  rules:
  - host: api.my-app.com
    http:
      paths:
      - path: /
        backend:
          serviceName: max-backend
          servicePort: 3030
```

## Namespace

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: custom-namespace
```
