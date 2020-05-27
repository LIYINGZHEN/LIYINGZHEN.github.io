---
title:       "Linked List - Reverse a linked list"
date:        2020-04-12T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing links between nodes.

**Examples :**

```
Input: Head of following linked list
1->2->3->4->NULL
Output: Linked list should be changed to,
4->3->2->1->NULL

Input: Head of following linked list
1->2->3->4->5->NULL
Output: Linked list should be changed to,
5->4->3->2->1->NULL

Input: NULL
Output: NULL

Input: 1->NULL
Output: 1->NULL
```

---

**METHOD 1 (Recursively)**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class ReverseALinkedList {
    static Node reverse(Node head) {
        if (head == null || head.next == null) {
            return head;
        }

        Node newHead = reverse(head.next);

        head.next.next = head;
        head.next = null;

        return newHead;
    }

    @Test
    public void test() {
        LinkedList list = new LinkedList();
        list.head = new Node(85);
        list.head.next = new Node(15);
        list.head.next.next = new Node(4);
        list.head.next.next.next = new Node(20);

        list.head = reverse(list.head);
        assertArrayEquals(new int[]{20, 4, 15, 85}, list.getList());
    }
}
```
