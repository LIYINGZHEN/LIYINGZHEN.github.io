---
title:       "Linked List - Remove duplicates from a sorted linked list"
date:        2020-04-23T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Write a function which takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

For example if the linked list is `11->11->11->21->43->43->60` then removeDuplicates() should convert the list to `11->21->43->60`.

---

**METHOD 1 (Iteratively)**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class RemoveDuplicateElement {
    // Time: O(n) ; Space: O(1)
    static void removeDuplicate(Node head) {
        if (head == null) {
            return;
        }

        Node curr = head;
        while (curr != null) {
            Node next = curr;
            while (next != null && curr.data == next.data) {
                next = next.next;
            }
            curr.next = next;
            curr = curr.next;
        }
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();

        ll.push(60);
        ll.push(60);
        ll.push(43);
        ll.push(43);
        ll.push(21);
        ll.push(11);
        ll.push(11);
        ll.push(11);

        removeDuplicate(ll.head);

        assertArrayEquals(new int[]{11, 21, 43, 60}, ll.getList());
    }
}
```

**METHOD 2 (Recursively)**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class RemoveDuplicateElement {
    // Time: O(n) ; Space: O(n)
    static void removeDuplicate(Node head) {
        if (head == null) {
            return;
        }

       if (head.next != null) {
           if (head.data == head.next.data) {
               head.next = head.next.next;
               removeDuplicate(head);
           } else {
               removeDuplicate(head.next);
           }
       }
    }

    @Test
    public void test() {
        LinkedList ll2 = new LinkedList();

        ll2.push(60);
        ll2.push(60);
        ll2.push(43);
        ll2.push(43);
        ll2.push(21);
        ll2.push(11);
        ll2.push(11);
        ll2.push(11);

        removeDuplicate(ll2.head);

        assertArrayEquals(new int[]{11, 21, 43, 60}, ll2.getList());
    }
}
```
