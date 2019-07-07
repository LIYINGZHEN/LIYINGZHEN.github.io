---
title: "LeetCode - 217. Contains Duplicate"
date: 2019-06-26T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/contains-duplicate/)

## Problem Statement

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

*Example: 1*

```js
Input: [1,2,3,1]
Output: true
```

*Example: 2*

```js
Input: [1,2,3,4]
Output: false
```

*Example: 3*

```js
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Solution

```go
func containsDuplicate(nums []int) bool {
	hashMap := make(map[int]int)

	for _, v := range nums {
		_, ok := hashMap[v]
		if ok {
			return true
		}
		hashMap[v] = v
	}

	return false
}
```
