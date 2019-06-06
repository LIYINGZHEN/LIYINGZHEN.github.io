---
title: "LeetCode - 024. Swap Nodes in Pairs"
date: 2019-06-03T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Problem Statement

Given a linked list, swap every two adjacent nodes and return its head.

You may **not** modify the values in the list's nodes, only nodes itself may be changed.

*Example*

> Given 1->2->3->4, you should return the list as 2->1->4->3.

## Solution

```go
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
  dummy := ListNode{}
  dummy.Next = head

  pre := &dummy

  for pre != nil {
    if pre.Next == nil || pre.Next.Next == nil {
      break
    }

    first := pre.Next
    pre.Next = first.Next
    first.Next = first.Next.Next
    pre.Next.Next = first
    pre = first
  }

  return dummy.Next
}
```

### Reference:

- [LeetCode 24. Swap Nodes in Pairs 解题报告](https://blog.csdn.net/camellhf/article/details/72866053)
