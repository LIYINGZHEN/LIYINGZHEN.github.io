---
title: "LeetCode - 532. K-diff Pairs in an Array"
date: 2019-07-03T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/k-diff-pairs-in-an-array/)

## Problem Statement

Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

*Example 1:*

```js
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
```

*Example 2:*

```js
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
```

*Example 3:*

```js
Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).
```


## Solution

```go
func findPairs(nums []int, k int) int {
	if k < 0 {
		return 0
	}

	dict, count := make(map[int]int), 0

	for _, v := range nums {
		dict[v]++
	}

	for v, c := range dict {
		if k == 0 {
			if c >= 2 {
				count++
			}
		} else {
			if dict[v+k] > 0 {
				count++
			}
		}
	}

	return count
}
```
