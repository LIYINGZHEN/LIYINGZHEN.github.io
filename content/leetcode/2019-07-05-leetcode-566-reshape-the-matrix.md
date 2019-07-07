---
title: "LeetCode - 566. Reshape the Matrix"
date: 2019-07-05T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/reshape-the-matrix/)

## Problem Statement

In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

*Example: 1*

```js
Input:
nums =
[[1,2],
 [3,4]]
r = 1, c = 4
Output:
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
```

*Example: 2*

```js
Input:
nums =
[[1,2],
 [3,4]]
r = 2, c = 4
Output:
[[1,2],
 [3,4]]
Explanation:
There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.
```

## Solution

```go
func matrixReshape(nums [][]int, r int, c int) [][]int {
	if len(nums) == 0 {
		return nums
	}

	m := len(nums)
	n := len(nums[0])

	if m*n != r*c {
		return nums
	}

	ans := make([][]int, r)
	for i := 0; i < len(ans); i++ {
		ans[i] = make([]int, c)
	}

	for i := 0; i < m*n; i++ {
		x := i % n
		y := i / n
		newX := i % c
		newY := i / c
		ans[newY][newX] = nums[y][x]
	}

	return ans
}
```
