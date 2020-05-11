---
title:       "Stack - Next greater element in an array"
date:        2020-04-29T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

**METHOD 1**

```java
import java.util.Stack;

public class NextGreaterElement {
    // Time: O(n), Space: O(n)
    static void printNGE(int[] arr) {
        if (arr == null || arr.length == 0) {
            return;
        }

        int n = arr.length;

        Stack<Integer> s = new Stack<>();
        int[] result = new int[n];

        for (int i = n - 1; i >= 0; i--) {
            int data = arr[i];
            if (!s.isEmpty() && data > s.peek()) {
                s.pop();
            }
            if (s.isEmpty()) {
                result[i] = -1;
            } else {
                result[i] = s.peek();;
            }
            s.push(data);
        }

        for (int i = 0; i < n; i++) {
            System.out.printf("%s ", result[i]);
        }
    }

    public static void main(String[] args) {
        int arr[] = { 11, 13, 21, 3 };
        printNGE(arr);
    }
}
```
