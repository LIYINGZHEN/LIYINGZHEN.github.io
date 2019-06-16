---
title: "LeetCode - 268. Missing Number"
date: 2019-06-29T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/move-zeroes/)

## Problem Statement

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

*Example: *

```js
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

## Solution

```go
func moveZeroes(nums []int) {
	replaceIndex := 0

	for _, v := range nums {
		if v != 0 {
			nums[replaceIndex] = v
			replaceIndex++
		}
	}

	for i := replaceIndex; i < len(nums); i++ {
		nums[i] = 0
	}
}
```
