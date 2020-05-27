---
title:       "Stack - Maximum of minimum for every window size"
date:        2020-05-13T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Given an integer array of size n, find the maximum of the minimum’s of every window size in the array. Note that window size varies from 1 to n.

**Example:**

```
Input:  arr[] = {10, 20, 30, 50, 10, 70, 30}
Output:         70, 30, 20, 10, 10, 10, 10

First element in output indicates maximum of minimums of all
windows of size 1.
Minimums of windows of size 1 are {10}, {20}, {30}, {50}, {10},
{70} and {30}.  Maximum of these minimums is 70

Second element in output indicates maximum of minimums of all
windows of size 2.
Minimums of windows of size 2 are {10}, {20}, {30}, {10}, {10},
and {30}.  Maximum of these minimums is 30

Third element in output indicates maximum of minimums of all
windows of size 3.
Minimums of windows of size 3 are {10}, {20}, {10}, {10} and {10}.
Maximum of these minimums is 20

Similarly other elements of output are computed.
```

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertArrayEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/find-the-maximum-of-minimums-for-every-window-size-in-a-given-array/
 * Complexity : time: O(n) ; space: O(n)
 */

public class MaximumOfMinimumForEveryWindowSize {
    // Time: O(n) ; Space: O(n)
    static int[] printMaxOfMin(int[] arr) {
        if (arr == null || arr.length == 0) {
            return new int[]{};
        }

        int n = arr.length;

        int[] nextSmaller = new int[n];
        int[] prevSmaller = new int[n];

        Stack<Integer> s = new Stack<>();

        // Find next smaller.
        for (int i = n - 1; i >= 0; i--) {
            while (!s.isEmpty() && arr[s.peek()] >= arr[i]) {
                s.pop();
            }
            nextSmaller[i] = s.isEmpty() ? n : s.peek();
            s.push(i);
        }

        while (!s.isEmpty()) {
            s.pop();
        }

        // Find prev smaller.
        for (int i = 0; i < n; i++) {
            while (!s.isEmpty() && arr[s.peek()] >= arr[i]) {
                s.pop();
            }
            prevSmaller[i] = s.isEmpty() ? -1 : s.peek();
            s.push(i);
        }

        // Window size from 0 to n.
        int[] maxOfMin = new int[n + 1];

        for (int i = 0; i < n; i++) {
            // Minimum value for a window size.
            int min = arr[i];
            int windowSize = nextSmaller[i] - prevSmaller[i] - 1;
            // Maximum of minimum for a given window size.
            maxOfMin[windowSize] = Math.max(maxOfMin[windowSize], min);
        }

        // maxOfMin[i] would always be greater or same as result for length i+1, i.e., maxOfMin[i+1].
        for (int i = n - 1; i >= 1; i--) {
            maxOfMin[i] = Math.max(maxOfMin[i], maxOfMin[i + 1]);
        }

        // Generate the answer, window size from 1 to n.
        int[] ans = new int[n];
        for (int i = 1; i <= n; i++) {
            ans[i - 1] = maxOfMin[i];
        }

        return ans;
    }

    @Test
    public void test() {
        int[] arr = {10, 20, 30, 50, 10, 70, 30};
        assertArrayEquals(new int[]{70, 30, 20, 10, 10, 10, 10}, printMaxOfMin(arr));
    }
}
```
