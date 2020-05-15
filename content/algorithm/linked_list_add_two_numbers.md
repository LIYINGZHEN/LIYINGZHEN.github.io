---
title:       "Linked List - Add two numbers"
date:        2020-04-25T00:00:00+00:00
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

**METHOD 1**

```java
public class AddTwoNumbers {
    static Node head1, head2;

    static class Node {
        int data;
        Node next;

        Node(int d) {
            data = d;
            next = null;
        }
    }

    int getLength(Node head) {
        if (head == null) {
            return 0;
        }
        return 1 + getLength(head.next);
    }

    void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
        System.out.println("");
    }

    Node reverse(final Node head) {
        if (head == null || head.next == null) {
            return head;
        }
        Node newHead = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }

    Node sum(final Node head1, final Node head2) {
        if (head1 == null && head2 == null) {
            return null;
        }
        if (head1 == null) {
            return head2;
        }

        if (getLength(head1) < getLength(head2)) {
            return addTwoLists(head2, head1);
        }

        int sum = head1.data;
        if (head2 != null) {
            sum += head2.data;
        }
        int carry = sum / 10;
        head1.data = sum % 10;

        if (head1.next == null && carry != 0) {
            head1.next = new Node(carry);
        } else if (head1.next != null) {
            head1.next.data += carry;
            head1.next = sum(head1.next, head2 != null ? head2.next : null);
        }

        return head1;
    }

    // Time: O(n), Space: O(n)
    Node addTwoLists(final Node head1, final Node head2) {
        if (head1 == null && head2 == null) {
            return null;
        }
        if (head1 == null) {
            return head2;
        }
        if (head2 == null) {
            return head1;
        }

        if (getLength(head1) < getLength(head2)) {
            return addTwoLists(head2, head1);
        }

        Node rHead1 = reverse(head1);
        Node rHead2 = reverse(head2);

        return reverse(sum(rHead1, rHead2));
    }


    public static void main(String[] args) {
        AddTwoNumbers list = new AddTwoNumbers();

        // creating first list
        list.head1 = new Node(9);
        list.head1.next = new Node(9);
        list.head1.next.next = new Node(9);
        System.out.print("First List is ");
        list.printList(head1);

        // creating seconnd list
        list.head2 = new Node(1);
        list.head2.next = new Node(8);
        System.out.print("Second List is ");
        list.printList(head2);

        // add the two lists and see the result
        Node rs = list.addTwoLists(head1, head2);
        System.out.print("Resultant List is ");
        list.printList(rs);
    }
}
```
