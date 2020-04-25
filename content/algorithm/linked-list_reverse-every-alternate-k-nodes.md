---
title:       "Reverse Every Alternate k Nodes In a Linked List"
date:        2020-04-25T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

```java
public class ReverseInAlternateKPair {
    Node head;

    class Node {
        int data;
        Node next;
        Node(int d) {data = d; next = null; }
    }

    public void push(int new_data) {
        Node new_node = new Node(new_data);
        new_node.next = head;
        head = new_node;
    }

    void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    Node reverse(final Node head, final int k) {
        if (head.next == null || k <= 1) {
            return head;
        }
        Node newHead = reverse(head.next, k - 1);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    Node reverseInKPair(final Node head, final int k) {
        if (head == null) {
            return null;
        }

        int step = k;
        Node nextStart = head;
        while (nextStart != null && step != 0) {
            nextStart = nextStart.next;
            step--;
        }

        step = k - 1;
        Node nextEnd = nextStart;
        while (nextEnd != null && step != 0) {
            nextEnd = nextEnd.next;
            step--;
        }

        Node newHead = reverse(head, k);
        head.next = nextStart;
        if (nextEnd != null) {
            nextEnd.next = reverseInKPair(nextEnd.next, k);
        }

        return newHead;
    }

    public static void main(String[] args) {
        ReverseInAlternateKPair llist = new ReverseInAlternateKPair();

        llist.push(8);
        llist.push(7);
        llist.push(6);
        llist.push(5);
        llist.push(4);
        llist.push(3);
        llist.push(2);
        llist.push(1);

        System.out.println("Given Linked List");
        llist.printList();

        llist.head = llist.reverseInKPair(llist.head, 3);

        System.out.println("Reversed list");
        llist.printList();
    }
}
```
