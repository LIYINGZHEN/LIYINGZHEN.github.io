---
title: "LeetCode - 053. Maximum Subarray"
date: 2019-06-12T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/maximum-subarray/)

## Problem Statement

Given an integer array **nums**, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

*Example:*

```js
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

## Solution

```go
func maxSubArray(nums []int) int {
	cur, max := nums[0], nums[0]
	for _, v := range(nums[1:]) {
        if cur < 0 {
            cur = v
        } else {
            cur += v
        }
        if cur > max {
            max = cur
        }
    }
    return max
}
```
