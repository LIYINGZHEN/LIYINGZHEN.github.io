---
title: "LeetCode - 342. Power of Four"
date: 2019-07-05T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/reshape-the-matrix/)

## Problem Statement

Example 1:

Input: 16
Output: true
Example 2:

Input: 5
Output: false

## Solution

```go
func isPowerOfFour(num int) bool {
	for num >= 4 {
		if num%4 == 0 {
			num = num / 4
		} else {
			return false
		}
	}
	return num == 1
}
```
