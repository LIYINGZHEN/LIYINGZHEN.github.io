---
title: "LeetCode - 119. Pascal's Triangle - II"
date: 2019-06-17T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/pascals-triangle-ii/)

## Problem Statement

Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

*Example:*

```js
Input: 3
Output: [1,3,3,1]
```

## Solution

```go
func getRow(rowIndex int) []int {
	result := make([][]int, rowIndex+1)
	result[0] = []int{1}

	for row := 1; row <= rowIndex; row++ {
		result[row] = make([]int, row+1)
		for column := 0; column <= row; column++ {
			if column == 0 || column == row {
				result[row][column] = 1
			} else {
				result[row][column] = result[row-1][column-1] + result[row-1][column]
			}
		}
	}

	return result[rowIndex]
}
```
