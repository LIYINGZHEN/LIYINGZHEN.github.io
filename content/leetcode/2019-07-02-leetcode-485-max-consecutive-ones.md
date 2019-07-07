---
title: "LeetCode - 485. Max Consecutive Ones"
date: 2019-07-02T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/max-consecutive-ones/)

## Problem Statement

Given a binary array, find the maximum number of consecutive 1s in this array.

*Example:*

```js
Given a binary array, find the maximum number of consecutive 1s in this array.
```

## Solution

```go
func findMaxConsecutiveOnes(nums []int) int {
	max, counter := 0, 0
	for _, v := range nums {
		if v == 1 {
			counter++
			continue
		}
		if counter > max {
			max = counter
		}
		counter = 0
	}
	if counter > max {
		max = counter
	}
	return max
}
```
