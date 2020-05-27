---
title:       "Queue - Maximum of all subarrays of size k"
date:        2020-06-05T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "queue"]
---

Given an array and an integer K, find the maximum for each and every contiguous subarray of size k.

**Examples :**

```
Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3
Output: 3 3 4 5 5 5 6
Explanation:
Maximum of 1, 2, 3 is 3
Maximum of 2, 3, 1 is 3
Maximum of 3, 1, 4 is 4
Maximum of 1, 4, 5 is 5
Maximum of 4, 5, 2 is 5
Maximum of 5, 2, 3 is 5
Maximum of 2, 3, 6 is 6

Input: arr[] = {8, 5, 10, 7, 9, 4, 15, 12, 90, 13}, K = 4
Output: 10 10 10 15 15 90 90
Explanation:
Maximum of first 4 elements is 10, similarly for next 4
elements (i.e from index 1 to 4) is 10, So the sequence
generated is 10 10 10 15 15 90 90
```

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.Deque;
import java.util.LinkedList;

/**
 * Question   : https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/
 * Complexity : Time: O(n) ; Space: O(n)
 * Author     : Max
 */
public class MaximumSubarrays {
    static void printMax(int[] arr, int k) {
        int n = arr.length;
        Deque<Integer> q = new LinkedList<>();

        for (int i = 0; i < k; i++) {
            while (!q.isEmpty() && arr[i] >= arr[q.peekLast()]) {
                q.removeLast();
            }
            q.addLast(i);
        }

        for (int i = k; i < n; i++) {
            System.out.print(arr[q.peek()] + " ");
            while ((!q.isEmpty()) && q.peek() <= i - k) {
                q.removeFirst();
            }
            while ((!q.isEmpty()) && arr[i] >= arr[q.peekLast()]) {
                q.removeLast();
            }
            q.addLast(i);
        }

        System.out.print(arr[q.peek()]);
    }

    @Test
    public void test() {
        int arr[] = { 12, 1, 78, 90, 57, 89, 56 };
        int k = 3;
        printMax(arr, k);
    }
}
```
