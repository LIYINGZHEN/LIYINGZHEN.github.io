---
title:       "Kubernetes Cheat Sheet"
date:        2019-05-27T00:00:00+00:00
author:      "Max"
published:   false
tags:        ["k8s"]
---

# Command

## Minikube

```bash
minikube start

minikube status

minikube ip

minikube dashboard

minikube ssh
```

## General Commands

```bash
# Displaying cluster information.
kubectl cluster-info

# Using kubectl explain to discover possible API object fields.
kubectl explain pods

#
cat ~/.kube/config

# Connect between our host and the kubernetes cluster.
kubectl proxy

kubectl config view
kubectl config get-contexts
kubectl cluster-info
kubectl config use-context <context>

# Forwarding a local network port to a port in the pod.
kubectl port-forward <pod-name> 8888:8080

#
kubectl get all
```

## Deployment Commands

```bash
# List deployments.
kubectl get deployments

# Show the status of the rollout.
kubectl rollout status deployment/service

#
kubectl describe deployment
kubectl describe deployments/<deployments-name>
```

## Pod Commands

```bash
# Apply pod config.
kubectl apply -f pod.yaml

# See the full descriptor of the pod.
kubectl get po <pod-name> -o yaml
# Look for existing Pods.
kubectl get po <pod-name> -o wide
kubectl get po <pod-name> --show-labels
# Listing pods using a label selector
kubectl get po -l <label-name>=<label-value>
# List all pods (include completed pods)
kubectl get po -a

# Check application configuration.
kubectl describe po
kubectl describe po/<pod-name>

# View the container logs
kubectl logs -f <pod-name>

# Executing command on the container
kubectl exec <pod-name> env
# Get a shell to a running pod.
kubectl exec -it <pod-name> sh | bash
#
kubectl exec <pod-name> -- curl -s http://10.111.249.153

# Delete pod.
kubectl delete po <pod-name>
# Deleting pods using label selectors
kubectl delete po -l rel=canary
```

## Ingress Commands

```bash
kubectl get ingresses
```

## Service Commands

```bash
# Apply service config.
kubectl apply -f service.yaml

# List the current Services.
kubectl get svc
kubectl get svc/<service-name>

#
kubectl describe svc
kubectl describe svc/<service-name>

#
kubectl get endpoints <service-name>

# Delete service.
kubectl delete svc <service-name>
```

## Node Commands

```bash
# Using JSONPath to get the IPs of all your nodes
kubectl get nodes -o jsonpath='{.items[*].status. ➥ addresses[?(@.type=="ExternalIP")].address}'

# Listing cluster nodes.
kubectl get nodes -o wide

#
kubectl describe node
kubectl describe node/<node-name>
```

## Namespace Commands

```bash
# Listing name spaces.
kubectl get ns

# Deleting pods by deleting the whole namespace.
kubectl delete ns custom-namespace
```

# YAML

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
      containers:
      - name: max-backend
        image: nginx
        # Environment variables.
        ports:
        - name: api-port
          containerPort: 80
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
  - name: http
    port: 32333 # This is the port of the service’s internal cluster IP.
    nodePort: 32333
    targetPort: api-port # This is the target port of the backing pods.
    # Node port is the port on which the service can be accessed from external users using Kube-Proxy.
  - name: https
    port: 443
    targetPort: 8443
  selector:
    # All pods with the app=max-backend label will be part of this service.
    app: max-backend
```
