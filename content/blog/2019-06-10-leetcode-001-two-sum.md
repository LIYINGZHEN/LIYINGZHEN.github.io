---
title: "LeetCode - 001. Two Sum"
date: 2019-06-10T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/two-sum/)

## Problem Statement

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

*Example:*

```js
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## Solution

```go
func twoSum(nums []int, target int) []int {
	// visited store value and index
	visited := make(map[int]int)

	for currentIndex, v := range nums {
		counterPart := target - v

		counterPartIndex, ok := visited[counterPart]
		if ok {
			return []int{counterPartIndex, currentIndex}
		}
		visited[v] = currentIndex
	}

	return []int{-1, -1}
}
```
