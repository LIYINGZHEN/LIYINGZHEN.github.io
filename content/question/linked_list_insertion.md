---
title:       "Linked List - Insertion"
date:        2020-04-05T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

Given a singly linked list, a position and an element, the task is to write a program to insert that element in a linked list at a given position.

**Examples :**

```
Input: 3->5->8->10, data = 2, position = 2
Output: 3->2->5->8->10

Input: 3->5->8->10, data = 11, position = 5
Output: 3->5->8->10->11
```

---

**METHOD 1**

```java
public class Insertion {
    // Time : O(n) ; Space: O(1)
    static void insert(LinkedList ll, int data, int pos) {
        int step = pos - 1;

        if (step < 0 || step > ll.length()) {
            System.out.println("Invalid position");
            return;
        }

        Node head = ll.head;
        Node newNode = new Node(data);

        // Insert in the beginning.
        if (step == 0) {
            newNode.next = head;
            ll.head = newNode;
            return;
        }

        // Insert in the middle and end.
        Node curr = head;
        Node prev = null;
        while (curr != null && step != 0) {
            prev = curr;
            curr = curr.next;
            step--;
        }
        newNode.next = curr;
        prev.next = newNode;
    }

    public static void main(String[] args) {
        LinkedList ll = new LinkedList();
        ll.push(3);
        ll.push(5);
        ll.push(8);
        ll.push(10);
        ll.printList(); // 10 -> 8 -> 5 -> 3
        insert(ll, 2, 3);
        ll.printList(); // 10 -> 8 -> 2 -> 5 -> 3
    }
}
```
