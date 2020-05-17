---
title:       "Linked List - Find the middle of a given linked list"
date:        2020-04-26T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Given a singly linked list, find middle of the linked list. For example, if given linked list is 1->2->3->4->5 then output should be 3.

---

If there are even nodes, then there would be two middle nodes, we want to print first middle element. For example, if given linked list is 1->2->3->4->5->6 then output should be 4.

**METHOD 1**

> This is much useful in merge sort.

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FindMiddle {
    static Node findMiddle(Node head) {
        if (head == null) {
            return null;
        }

        Node slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();

        // 2->3->20->5->10->15
        ll.push(15);
        ll.push(10);
        ll.push(5);
        ll.push(20);
        ll.push(3);
        ll.push(2);

        assertEquals(20, findMiddle(ll.head).data);
    }
}

```

If there are even nodes, then there would be two middle nodes, we want to print second middle element. For example, if given linked list is 1->2->3->4->5->6 then output should be 4.

**METHOD 2**

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FindMiddle {
    static Node findMiddle(Node head) {
        if (head == null) {
            return null;
        }

        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow;
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();

        // 2->3->20->5->10->15
        ll.push(15);
        ll.push(10);
        ll.push(5);
        ll.push(20);
        ll.push(3);
        ll.push(2);

        assertEquals(5, findMiddle(ll.head).data);
    }
}

```
