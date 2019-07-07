---
title: "LeetCode - 628. Maximum Product of Three Numbers"
date: 2019-07-08T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/maximum-product-of-three-numbers/)

## Problem Statement

Given an integer array, find three numbers whose product is maximum and output the maximum product.

*Example 1:*

```
Input: [1,2,3]
Output: 6
```

*Example 2:*

```
Input: [1,2,3,4]
Output: 24
```

## Solution

```go
import "math"

func maximumProduct(nums []int) int {
	min1, min2 := math.MaxInt32, math.MaxInt32
	max1, max2, max3 := -math.MaxInt32, -math.MaxInt32, -math.MaxInt32

	for _, v := range nums {
		if v > max1 {
			max3 = max2
			max2 = max1
			max1 = v
		} else if v > max2 {
			max3 = max2
			max2 = v
		} else if v > max3 {
			max3 = v
		}

		if v < min1 {
			min2 = min1
			min1 = v
		} else if v < min2 {
			min2 = v
		}
	}

	if max1*max2*max3 > max1*min1*min2 {
		return max1 * max2 * max3
	}
	return max1 * min1 * min2
}
```
