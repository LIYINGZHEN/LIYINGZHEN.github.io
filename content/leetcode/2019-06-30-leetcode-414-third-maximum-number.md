---
title: "LeetCode - 414. Third Maximum Number"
date: 2019-06-30T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/third-maximum-number/)

## Problem Statement

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

*Example: 1*

```js
Input: [3, 2, 1]

Output: 1
```

*Example: 2*

```js
Input: [3, 2, 1]

Output: 1
```

*Example: 2*

```js
Input: [2, 2, 3, 1]

Output: 1
```

## Solution

```go
func thirdMax(nums []int) int {
	const INT_MAX = int(^uint(0) >> 1)
	const INT_MIN = ^INT_MAX

	s1, s2, s3 := INT_MIN, INT_MIN, INT_MIN

	for _, num := range nums {
		if num > s1 {
			s1, s2, s3 = num, s1, s2
		} else if num < s1 && num > s2 {
			s2, s3 = num, s2
		} else if num < s2 && num > s3 {
			s3 = num
		}
	}

	if s3 != INT_MIN {
        // return the third maximum number
		return s3
	} else {
        // return the maximum
		return s1
	}
}
```
