---
title:       "Stack - Implement two stacks in an array"
date:        2020-04-28T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Create a data structure twoStacks that represents two stacks. Implementation of twoStacks should use only one array, i.e., both stacks should use the same array for storing elements. Following functions must be supported by twoStacks.

- push1(int x) –> pushes x to first stack
- push2(int x) –> pushes x to second stack
- pop1() –> pops an element from first stack and return the popped element
- pop2() –> pops an element from second stack and return the popped element

---

**METHOD 1**

```java
import java.util.Stack;

public class TwoStacks {
    int[] array;
    int idx1, idx2, cap;

    public TwoStacks(int cap) {
        this.array = new int[cap];
        this.idx1 = -1;
        this.idx2 = cap;
        this.cap = cap;
    }

    public boolean isFull() {
        return this.idx1 == this.idx2 - 1;
    }

    public void push1(int d) throws RuntimeException {
        if (isFull()) {
            throw new RuntimeException("Stack Overflow");
        }
        this.idx1++;
        this.array[this.idx1] = d;
    }

    public void push2(int d) throws RuntimeException {
        if (isFull()) {
            throw new RuntimeException("Stack Overflow");
        }
        this.idx2--;
        this.array[this.idx2] = d;
    }

    public int pop1() throws RuntimeException {
        if (this.idx1 == -1) {
            throw new RuntimeException("Stack Underflow");
        }
        int d = this.array[this.idx1];
        this.idx1--;
        return d;
    }

    public int pop2() {
        if (this.idx2 == cap) {
            throw new RuntimeException("Stack Underflow");
        }
        int d = this.array[this.idx2];
        this.idx2++;
        return d;
    }

    public int peek1() throws RuntimeException {
        if (this.idx1 == -1) {
            throw new RuntimeException("Stack Underflow");
        }
        int d = this.array[this.idx1];
        return d;
    }

    public int peek2() throws RuntimeException {
        if (this.idx2 == cap) {
            throw new RuntimeException("Stack Underflow");
        }
        int d = this.array[this.idx2];
        return d;
    }

    public static void main(String[] args) {
        TwoStacks ts = new TwoStacks(5);
        ts.push1(5);
        ts.push2(10);
        ts.push2(15);
        ts.push1(11);
        ts.push2(7);
        System.out.println("Popped element from" + " stack1 is " + ts.pop1());
        ts.push2(40);
        System.out.println("Popped element from" + " stack2 is " + ts.pop2());
    }
}
```
