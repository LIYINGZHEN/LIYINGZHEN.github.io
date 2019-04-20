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

**Pod**: Running containers in Kubernetes.

**Service**: Enabling clients to discover and talk to pods.










# Commands

## General Commands

```bash
# Starting a Minikube virtual machine.
minikube start

# Displaying cluster information.
kubectl cluster-info

# Using kubectl explain to discover possible API object fields.
kubectl explain pods

#
cat ~/.kube/config

# Connect between our host and the kubernetes cluster.
kubectl proxy

# Forwarding a local network port to a port in the pod.
kubectl port-forward <pod-name> 8888:8080
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
kubectl get nodes

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

## Ingress

> Exposes one or more services to external clients through a single externally reachable IP address.

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: max-backend
spec:
  rules:
  # This Ingress maps the api.my-app.com domain name to your service.
  - host: api.my-app.com
    http:
      paths:
      - path: /
        backend:
          serviceName: max-backend
          servicePort: 3030
```


## Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: max-backend
spec:
  clusterIP: None # This makes the service headless.
  ports:
  - name: api
    # Port is the port number which makes a service visible to other services running within the same K8s cluster
    port: 3030
    # Target port is the port on the POD where the service is running.
    targetPort: 3030
  selector:
    # All pods with the app=max-backend label will be part of this service.
    app: max-backend
```

**Exposing services to external clients.**


```yaml
apiVersion: v1
kind: Service
metadata:
  name: max-backend
spec:
  type: LoadBalancer
  ports:
  - name: http
    port: 80         # This is the port of the service’s internal cluster IP.
    targetPort: 8080 # This is the target port of the backing pods.
  selector:
    # All pods with the app=max-backend label will be part of this service.
    app: max-backend
```

```yaml
apiVersion: v1
kind: Service
metadata:
  name: max-backend
spec:
  type: NodePort
  ports:
  - name: http
    port: 8080 # This is the port of the service’s internal cluster IP.
    targetPort: 80 # This is the target port of the backing pods.
    # Node port is the port on which the service can be accessed from external users using Kube-Proxy.
    nodePort: 30001
  - name: https
    port: 443
    targetPort: 8443
  selector:
    # All pods with the app=max-backend label will be part of this service.
    app: max-backend
```

---

## Namespace

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: custom-namespace
```

## Job

> Runs pods that perform a completable task

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: batch-job
spec:
  # Setting completions to 5 makes this Job run five pods sequentially.
  completions: 5
  # Up to two pods can run in parallel.
  parallelism: 2
  template:
    metadata:
      labels:
        app: batch-job
    spec:
      restartPolicy: OnFailure
      containers:
      - name: main
        image: luksa/batch-job
```

## CronJob

> Runs a scheduled job once or periodically

```yaml
apiVersion: batch/v1beta1
kind: CronJob
metadata:
    name: batch-job-every-fifteen-minutes
spec:
  schedule: "0,15,30,45 * * * *"
  # At the latest, the pod must start running at 15 seconds past the scheduled time.
  startingDeadlineSeconds: 15
  jobTemplate:
    spec:
      template:
        metadata:
          labels:
            app: periodic-batch-job
        spec:
          restartPolicy: OnFailure
          containers:
          - name: main
            image: luksa/batch-job
```

---

> Pods shouldn’t be created directly, because they will not be re-created if they’re deleted by mistake, if the node they’re running on fails, or if they’re evicted from the node.

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

## ReplicationControllers

> ReplicationControllers should be replaced with ReplicaSets and Deployments, which provide the same functionality, but with additional powerful features.
