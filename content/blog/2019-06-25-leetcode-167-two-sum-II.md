---
title: "LeetCode - 167. Two Sum II - Input array is sorted"
date: 2019-06-25T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## Problem Statement

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

*Example:*

```js
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
```

## Solution

```go
func twoSum(numbers []int, target int) []int {
	for i, n := range numbers {
		b := binarySearch(numbers, target-n, i+1, len(numbers)-1)
		if b != -1 {
			return []int{i + 1, b + 1}
		}
	}
	return []int{}
}

func binarySearch(nums []int, target int, left int, right int) int {
    // key point
	if left > right {
		return -1
	}
	mid := (left + right) / 2
	if nums[mid] == target {
		return mid
	}
	if nums[mid] > target {
		return binarySearch(nums, target, left, mid-1)
	}
	return binarySearch(nums, target, mid+1, right)
}
```
