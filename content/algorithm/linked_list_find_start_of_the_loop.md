---
title:       "Linked List - Find Start of The Loop"
date:        2020-04-26T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "linked-list"]
---

```java
public class FindStartNodeInLoop{
    private Node head;

    private static class Node {
        private int data;
        private Node next;
        Node(int d) {
            this.data = d;

        }
    }

    public void addToTheLast(Node node) {
        if (head == null) {
            head = node;
        } else {
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
    }


    public void printList() {
        Node temp = head;
        while (temp != null) {
            System.out.format("%d ", temp.data);
            temp = temp.next;
        }
        System.out.println();
    }

    public Node findStartNodeOfTheLoop(final Node head) {
        if (head == null) {
            return null;
        }

        Node slow = head, fast = head;
        boolean loopExists = false;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                loopExists = true;
                break;
            }
        }

        if (loopExists) {
            Node start = head;
            while (start != slow) {
                start = start.next;
                slow = slow.next;
            }
            return slow;
        }

        return null;
    }


    public static void main(String[] args) {
        FindStartNodeInLoop list = new FindStartNodeInLoop();

        Node loopNode = new Node(7);
        list.addToTheLast(new Node(5));
        list.addToTheLast(new Node(6));
        list.addToTheLast(loopNode);
        list.addToTheLast(new Node(1));
        list.addToTheLast(new Node(2));
        list.addToTheLast(loopNode);

        Node startNode=list.findStartNodeOfTheLoop(list.head);

        if(startNode != null) {
            System.out.println("start Node of loop is "+ startNode.data);
        }
    }
}
```
