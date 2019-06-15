---
title: "LeetCode - 219. Contains Duplicate II"
date: 2019-06-27T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/contains-duplicate-ii/)

## Problem Statement

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

*Example: 1*

```js
Input: nums = [1,2,3,1], k = 3
Output: true
```

*Example: 2*

```js
Input: nums = [1,0,1,1], k = 1
Output: true
```

*Example: 3*

```js
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

## Solution

```go
func containsNearbyDuplicate(nums []int, k int) bool {
	hashMap := make(map[int]int)

	for currentIndex, v := range nums {
		index, ok := hashMap[v]
		if ok {
			if (currentIndex - index) <= k {
				return true
			}
		}
		hashMap[v] = currentIndex
	}

	return false
}
```
