---
title:       "Networking"
description: " "
date:        2019-03-14T05:00:00+00:00
author:      "Max"
published:   true
tags:        ["networking"]
categories:  ["notes"]
---

# Primer on Latency and Bandwidth

1. Latency - The time from the source sending a packet to the destination receiving it

2. Bandwidth - Maximum throughput of a logical or physical communication path

**Notes**

> Network data rates are typically measured in bits per second (bps), whereas data rates for non-network equipment are typically shown in bytes per second (Bps). This is a common source of confusion, pay close attention to the units.

> For example, to put a 10 megabyte (MB) file "on the wire" over a 1Mbps link, we will need 80 seconds. 10MB is equal to 80Mb because there are 8 bits for every byte!

## Speed, Performance, and Human Perception

- 0–100 ms	  Instant
- 100–300 ms	Small perceptible delay

## Measuring Latency with Traceroute

```
traceroute google.com
```

## Delivering Higher Bandwidth and Lower Latencies

To improve performance of our applications, we need to architect and optimize our protocols and networking code with explicit awareness of the limitations of available bandwidth and the speed of light: we need to reduce round trips, move the data closer to the client, and build applications that can hide the latency through caching, pre-fetching, and a variety of similar techniques, as explained in subsequent chapters.

# Building Blocks of TCP

The IP, or Internet Protocol, is what provides the host-to-host routing and addressing, and TCP, or Transmission Control Protocol, is what provides the abstraction of a reliable network running over an unreliable channel.

## Three-Way Handshake


