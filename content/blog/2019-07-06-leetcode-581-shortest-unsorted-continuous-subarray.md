---
title: "LeetCode - 581. Shortest Unsorted Continuous Subarray"
date: 2019-07-06T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)

## Problem Statement

Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

*Example:*

```js
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
```

## Solution

```go
func findUnsortedSubarray(nums []int) int {
	sorted := make([]int, len(nums))
	copy(sorted, nums)
	sort.Ints(sorted)

	start, end, length := -1, -1, 0

	for i, v := range nums {
		if v != sorted[i] {
			if start == -1 {
				start = i
			} else {
				end = i
			}
		}
	}

	if start == end {
		return 0
	} else {
		length = end - start + 1
	}

	return length
}
```
