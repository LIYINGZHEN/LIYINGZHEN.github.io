---
title:       "Stack - Iterative Tower of Hanoi"
date:        2020-05-17T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Tower of Hanoi is a mathematical puzzle. It consists of three poles and a number of disks of different sizes which can slide onto any poles. The puzzle starts with the disk in a neat stack in ascending order of size in one pole, the smallest at the top thus making a conical shape. The objective of the puzzle is to move all the disks from one pole (say ‘source pole’) to another pole (say ‘destination pole’) with the help of the third pole (say auxiliary pole).

The puzzle has the following two rules:

- 1. You can’t place a larger disk onto smaller disk
- 2. Only one disk can be moved at a time

---

**METHOD 1**

```java
/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/iterative-tower-of-hanoi/
 * Complexity : time: O(2^n) ; space: O(n)
 */

public class IterativeTowerOfHanoi {
    static class Stack {
        int cap;
        int top;
        int array[];

        Stack(int capacity) {
            cap = capacity;
            top = -1;
            array = new int[capacity];
        }

        boolean isFull() {
            return top == cap - 1;
        }

        boolean isEmpty() {
            return top == -1;
        }

        void push(int item) {
            if (isFull()) {
                return;
            }
            array[++top] = item;
        }

        int pop() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }
            return array[top--];
        }

        int peek() {
            if (isEmpty()) {
                return Integer.MIN_VALUE;
            }
            return array[top];
        }
    }

    static void moveDisksBetweenTwoPoles(Stack src, Stack des, char s, char d) {
        int srcTopDisk = src.peek();
        int desTopDisk = des.peek();

        if (srcTopDisk == Integer.MIN_VALUE) {
            src.push(des.pop());
            moveDisk(d, s, desTopDisk);
        } else if (desTopDisk == Integer.MIN_VALUE)  {
            des.push(src.pop());
            moveDisk(s, d, srcTopDisk);
        } else if (srcTopDisk > desTopDisk) {
            src.push(des.pop());
            moveDisk(d, s, desTopDisk);
        } else {
            des.push(src.pop());
            moveDisk(s, d, srcTopDisk);
        }
    }

    static void moveDisk(char from, char to, int disk) {
        System.out.println("Move the disk " + disk + " from " + from + " to " + to);
    }

    static void toh(int numOfDisks, Stack src, Stack des, Stack aux) {
        char s = 'S', d = 'D', a = 'A';

        if (numOfDisks % 2 == 0) {
            d = 'A';
            a = 'D';
        }

        for (int i = numOfDisks; i >= 1; i--) {
            src.push(i);
        }

        int totalMoves = (int) (Math.pow(2, numOfDisks) - 1);

        for (int i = 1; i <= totalMoves; i++) {
            if (i % 3 == 1) {
                // Legal movement of top disk between source pole and destination pole.
                moveDisksBetweenTwoPoles(src, des, s, d);
            } else if (i % 3 == 2) {
                // Legal movement top disk between source pole and auxiliary pole.
                moveDisksBetweenTwoPoles(src, aux, s, a);
            } else if (i % 3 == 0) {
                // Legal movement top disk between auxiliary pole and destination pole.
                moveDisksBetweenTwoPoles(aux, des, a, d);
            }
        }
    }

    public static void main(String[] args) {
        int numOfDisks = 3;

        Stack src = new Stack(numOfDisks);
        Stack des = new Stack(numOfDisks);
        Stack aux = new Stack(numOfDisks);

        toh(numOfDisks, src, des, aux);
    }
}
```
