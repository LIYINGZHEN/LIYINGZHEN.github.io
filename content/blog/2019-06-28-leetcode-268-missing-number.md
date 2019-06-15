---
title: "LeetCode - 268. Missing Number"
date: 2019-06-28T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/missing-number/)

## Problem Statement

Given an array containing n distinct numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array.

*Example: 1*

```js
Input: [3,0,1]
Output: 2
```

*Example: 2*

```js
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

## Solution

```go
func missingNumber(nums []int) int {
	missing := len(nums)
	for i, v := range nums {
		missing = missing ^ i ^ v
	}
	return missing
}
```
