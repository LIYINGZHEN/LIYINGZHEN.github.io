---
title: "LeetCode - 118. Pascal's Triangle"
date: 2019-06-16T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/pascals-triangle/)

## Problem Statement

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

*Example:*

```js
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

## Solution

```go
func generate(numRows int) [][]int {
	if numRows < 1 {
		return [][]int{}
	}

	result := make([][]int, numRows)
	result[0] = []int{1}

	for row := 1; row < numRows; row++ {
		result[row] = make([]int, row+1)

		for column := 0; column <= row; column++ {
			if column == 0 || column == row {
				result[row][column] = 1
			} else {
				result[row][column] = result[row-1][column-1] + result[row-1][column]
			}
		}
	}

	return result
}
```
