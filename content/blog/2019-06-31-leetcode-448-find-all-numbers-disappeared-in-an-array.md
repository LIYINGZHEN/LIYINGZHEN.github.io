---
title: "LeetCode - 448. Find All Numbers Disappeared in an Array"
date: 2019-06-31T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

## Problem Statement

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

*Example:*

```js
Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
```

## Solution

```go
func findDisappearedNumbers(nums []int) []int {
	for _, v := range nums {
		index := int(abs(v) - 1)
		if nums[index] > 0 {
			nums[index] = -nums[index]
		}
	}

	res := make([]int, 0, len(nums))
	for i := 0; i < len(nums); i++ {
		if nums[i] > 0 {
			res = append(res, i+1)
		}
	}

	return res
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
```
