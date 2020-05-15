---
title:       "Stack - K stacks in an array "
date:        2020-05-02T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Create a data structure kStacks that represents k stacks. Implementation of kStacks should use only one array, i.e., k stacks should use the same array for storing elements. Following functions must be supported by kStacks.

- push(int x, int sn) –> pushes x to stack number ‘sn’ where sn is from 0 to k-1
- pop(int sn) –> pops an element from stack number ‘sn’ where sn is from 0 to k-1

---

**METHOD 1**

```java
public class KStack {
    int n, k, free;
    int[] arr;
    int[] top;
    int[] next;

    KStack(int k, int n) {
        k = k;
        n = n;
        free = 0;
        arr = new int[n];  // Array of size n to store actual content to be stored in stacks
        top = new int[k];  // Array of size k to store indexes of top elements of stacks
        next = new int[n]; // Array of size n to store next entry in all stacks and free list

        for (int i = 0; i < k; i++) {
            top[i] = -1;
        }

        for (int i = 0; i < n - 1; i++) {
            next[i] = i + 1;
        }
        next[n - 1] = -1;
    }

    boolean isFull() {
        return free == -1;
    }

    boolean isEmpty(int sn) {
        return top[sn] == -1;
    }

    void push(int num, int sn) {
        if (isFull()) {
            System.out.println("Stack Overflow");
            return;
        }

        // Find the free position to insert.
        int currFree = free;
        // Update current free position to next free position.
        free = next[currFree];
        // Next position points to previous position.
        next[currFree] = top[sn];

        // Insert value to current free position.
        arr[currFree] = num;
        // Set top position for the stack.
        top[sn] = currFree;
    }

    int pop(int sn) {
        if (isEmpty(sn)) {
            System.out.println("Stack Underflow");
            return Integer.MIN_VALUE;
        }

        // Get the current top position.
        int currPos = top[sn];

        // Get the previous position.
        int prePos = next[currPos];
        // Update top to previous position.
        top[sn] = prePos;

        next[currPos] = free;
        free = currPos;

        // Return the value in the current top position.
        return arr[currPos];
    }

    public static void main(String[] args) {
        int k = 3, n = 10;

        KStack ks = new KStack(k, n);

        ks.push(15, 2);
        ks.push(45, 2);

        ks.push(17, 1);
        ks.push(49, 1);
        ks.push(39, 1);

        ks.push(11, 0);
        ks.push(9, 0);
        ks.push(7, 0);

        System.out.println("Popped element from stack 2 is " + ks.pop(2));
        System.out.println("Popped element from stack 1 is " + ks.pop(1));
        System.out.println("Popped element from stack 0 is " + ks.pop(0));
    }
}
```
