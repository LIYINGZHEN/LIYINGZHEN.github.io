---
title: "LeetCode - 674. Longest Continuous Increasing Subsequence"
date: 2019-07-10T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/longest-continuous-increasing-subsequence/)

## Problem Statement

Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).

*Example 1:*

```
Input: [1,3,5,4,7]
Output: 3
Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3. 
Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.
```

*Example 2:*

```
Input: [2,2,2,2,2]
Output: 1
Explanation: The longest continuous increasing subsequence is [2], its length is 1. 
```

## Solution

```go
func findLengthOfLCIS(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	right, count, max := 1, 1, 1

	for right < len(nums) {
		if nums[right-1] < nums[right] {
			count++
			if max < count {
				max = count
			}
		} else {
			count = 1
		}
		right++
	}

	return max
}
```
