---
title: "LeetCode - 169. Majority Element"
date: 2019-06-24T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/majority-element/)

## Problem Statement

Given an array of size n, find the majority element. The majority element is the element that appears more than `⌊ n/2 ⌋` times.

You may assume that the array is non-empty and the majority element always exist in the array.

*Example: 1*

```js
Input: [3,2,3]
Output: 3
```

*Example: 2*

```js
Input: [2,2,1,1,1,2,2]
Output: 2
```


## Solution

```go
func majorityElement(nums []int) int {
	if len(nums) == 1 {
		return nums[0]
	}

	hashMap := make(map[int]int)
	half := len(nums) / 2

	for _, v := range nums {
		count, ok := hashMap[v]
		if ok {
			count++
			hashMap[v] = count
			if count > half {
				return v
			}
		} else {
			hashMap[v] = 1
		}
	}

	return 0
}
```
