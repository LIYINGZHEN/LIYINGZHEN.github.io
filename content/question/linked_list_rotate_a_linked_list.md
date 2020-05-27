---
title:       "Linked List - Rotate a Linked List"
date:        2020-04-14T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Given a singly linked list, rotate the linked list counter-clockwise by k nodes. Where k is a given positive integer. For example, if the given linked list is 10->20->30->40->50->60 and k is 4, the list should be modified to 50->60->10->20->30->40. Assume that k is smaller than the count of nodes in linked list.

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class RotateALinkedList {
    // Time: O(n) ; Space: O(1)
    static Node rotate(Node head, int k) {
        if (head == null) {
            return null;
        }

        int n = 0;
        Node temp = head;
        while (temp != null) {
            n++;
            temp = temp.next;
        }

        int rotate = k % n;

        if (rotate == 0) {
            return head;
        }

        Node curr = head;
        while (rotate != 1) {
            curr = curr.next;
            rotate--;
        }
        Node newTail = curr;

        // Change next of last node to previous head.
        Node tail = curr;
        while (tail.next != null) {
            tail = tail.next;
        }
        tail.next = head;

        Node newHead = newTail.next;
        newTail.next = null;

        return newHead;
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();

        // create a list 10->20->30->40->50->60
        for (int i = 60; i >= 10; i -= 10) {
            ll.push(i);
        }

        ll.head = rotate(ll.head, 4);

        assertArrayEquals(new int[]{50, 60, 10, 20, 30, 40}, ll.getList());
    }
}
```
