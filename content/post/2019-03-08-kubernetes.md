---
title:       "Kubernetes"
description: " "
date:        2019-03-08T12:00:00+00:00
author:      "Max"
published:   true
tags:        ["kubernetes"]
categories:  ["kubernetes"]
---

# Terminology

**Minikube**:

**Kubelet**:

**Master**:

**Pod**: A Pod is a group of one or more application containers (such as Docker or rkt) and includes shared storage (volumes), IP address and information about how to run them.

**Node**: A node is a worker machine in Kubernetes and may be a VM or physical machine, depending on the cluster. Multiple Pods can run on one Node.

**Service**: A Kubernetes Service is an abstraction layer which defines a logical set of Pods and enables external traffic exposure, load balancing and service discovery for those Pods.

# Command

```bash
#
kubectl

#
cat ~/.kube/config

#
kubectl run <deployment-name> --image=katacoda/docker-http-server:latest --replicas=<number> --port=<port> --hostport=<hostport>

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
kubectl get pods -o wide
# List the current Services
kubectl get services | svc
# List deployments.
kubectl get deployments
#
kubectl get nodes

#
kubectl port-forward my-pod 8000:3000

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

# Apply a new label
kubectl label pod <pod-name> app=v1

# Delete service.
kubectl delete service <service-name>
# Delete pod.
kubectl delete pod <pod-name>
```

# YAML

## Pod

```yaml
# my-first-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  labels:
    app: webserver
spec:
  containers:
  - name: pod-demo
    image: zxcvbnius/docker-demo
    ports:
    - containerPort: 3000
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
  replicas: 5
  selector:
    matchLabels:
      app: max-backend
  template:
    metadata:
      labels:
        app: max-backend
    spec:
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
            path: /api/health
            port: 3030
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
