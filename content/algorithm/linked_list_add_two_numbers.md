---
title:       "Linked List - Add two numbers"
date:        2020-04-01T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Given two numbers represented by two lists, write a function that returns the sum list. The sum list is list representation of the addition of two input numbers.

**Examples :**

```
Input: List1: 5->6->3  // number 365
       List2: 8->4->2 //  number 248
Output: Resultant list: 3->1->6  // number 613


Input: List1: 7->5->9->4->6  // number 64957
       List2: 8->4  // number 48
Output: Resultant list: 5->0->0->5->6  // number 65005
```

---

**METHOD 1 (Recursively)**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/
 * Complexity : Time: O(n) ; Space: O(n)
 */
public class AddTwoNumbers {
    static int length(Node head) {
        if (head == null) {
            return 0;
        }
        return 1 + length(head.next);
    }

    static Node add(Node headA, Node headB) {
        if (length(headB) > length((headA))) {
            return add(headB, headA);
        }

        int sum = headA.data;
        if (headB != null) {
            sum += headB.data;
        }
        int num = sum % 10;
        int carry = sum / 10;
        headA.data = num;

        if (headA.next == null) {
            if (carry != 0) {
                headA.next = new Node(carry);
            }
        } else {
            headA.next.data += carry;
            headA.next = add(headA.next, headB == null ? null : headB.next);
        }

        return headA;
    }

    @Test
    public void test() {
        LinkedList ll1 = new LinkedList();
        ll1.head = new Node(7);
        ll1.head.next = new Node(5);
        ll1.head.next.next = new Node(9);
        ll1.head.next.next.next = new Node(4);
        ll1.head.next.next.next.next = new Node(6);

        LinkedList ll2 = new LinkedList();
        ll2.head = new Node(8);
        ll2.head.next = new Node(4);

        ll1.head = add(ll1.head, ll2.head);

        assertArrayEquals(new int[]{5, 0, 0, 5, 6}, ll1.getList());
    }
}
```
