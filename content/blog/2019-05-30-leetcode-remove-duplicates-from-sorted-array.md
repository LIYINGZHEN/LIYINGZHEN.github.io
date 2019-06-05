---
title: "LeetCode - Remove Duplicates from Sorted Array"
date: 2019-05-30T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

## Problem Statement

Given a sorted array of numbers, remove the duplicates in-place such that each element appear only once and return the new length.

*Example 1*

> Given nums = [1,1,2],
>
> Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
>
> It doesn’t matter what you leave beyond the returned length.

*Example 2*

> Given nums = [0,0,1,1,1,2,2,3,3,4],
>
> Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.
>
> It doesn’t matter what values are set beyond the returned length.

## Solution

```go
package main

import (
	"fmt"
)

func removeDuplicates(nums []int) int {
	replaceIndex := 1

	for curr := 1; curr < len(nums); curr++ {
		if nums[curr] != nums[curr-1] {
			nums[replaceIndex] = nums[curr]
			replaceIndex++
		}
	}

	fmt.Printf("%v", nums)

	return replaceIndex
}

func main() {
	removeDuplicates([]int{1, 2, 3, 3, 3, 3, 3, 4})
}
```
