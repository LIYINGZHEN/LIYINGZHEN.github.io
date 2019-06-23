---
title: "LeetCode - 643. Maximum Average Subarray I"
date: 2019-07-09T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/maximum-average-subarray-i/)

## Problem Statement

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

*Example 1:*

```js
Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
```

## Solution

```go
func findMaxAverage(nums []int, k int) float64 {
	sum := 0

	for _, v := range nums[:k] {
		sum += v
	}

	maxSum, windowSum := sum, sum

	for i := 0; i < len(nums)-k; i++ {
		windowSum += nums[k+i] - nums[i]
		if windowSum > maxSum {
			maxSum = windowSum
		}
	}

	return float64(maxSum) / float64(k)
}
```
