---
title: "LeetCode - 257. Binary Tree Paths"
date: 2019-06-08T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/binary-tree-paths/)

## Problem Statement

Given a binary tree, return all root-to-leaf paths.

**Note**: A leaf is a node with no children.

*Example:*

```js
Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
```

## Solution

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
import "strconv"

func binaryTreePaths(root *TreeNode) []string {
	if root == nil {
		return nil
	}

	res := make([]string, 0, 16)

	dfs("", root, &res)

	return res
}

func dfs(path string, root *TreeNode, res *[]string) {
	if path == "" {
		path += strconv.Itoa(root.Val)
	} else {
		path += "->" + strconv.Itoa(root.Val)
	}

	if root.Left != nil {
		dfs(path, root.Left, res)
	}
	if root.Right != nil {
		dfs(path, root.Right, res)
	}

	if root.Left == nil && root.Right == nil {
		*res = append(*res, path)
	}
}
```
