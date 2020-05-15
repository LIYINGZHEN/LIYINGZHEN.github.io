---
title:       "Linked List - Remove duplicates from an unsorted linked list"
date:        2020-04-23T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Write a removeDuplicates() function which takes a list and deletes any duplicate nodes from the list. The list is not sorted.

For example if the linked list is `12->11->12->21->41->43->21` then removeDuplicates() should convert the list to `12->11->21->41->43`.

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.HashSet;

import static org.junit.Assert.assertArrayEquals;

public class RemoveDuplicatesUnsorted {
    // Time: O(n) ; Space: O(n)
    static void remove(Node head) {
        if (head == null) {
            return;
        }

        HashSet<Integer> h = new HashSet<>();

        Node curr = head;
        Node prev = null;
        while (curr != null) {
            if (h.contains(curr.data)) {
                prev.next = curr.next;
            } else {
                h.add(curr.data);
                prev = curr;
            }
            curr = curr.next;
        }
    }

    @Test
    public void test() {
        LinkedList ll = new LinkedList();

        ll.push(21);
        ll.push(43);
        ll.push(41);
        ll.push(21);
        ll.push(12);
        ll.push(11);
        ll.push(11);
        ll.push(12);

        remove(ll.head);

        assertArrayEquals(new int[]{12, 11, 21, 41, 43}, ll.getList());
    }
}
```
