---
title:       "Array - Rotate an array"
date:        2020-04-19T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

**METHOD 1**

```java
package array.max;

import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class RotateArray {
    // Time: O(n), Space: O(1)
    static void rotateArr(int arr[], int d) {
        if (arr.length == 0) {
            return;
        }

        int n = arr.length;
        int step = d % arr.length;
        int count = 0;

        for (int start = 0; count < n; start++) {
            int curr = start;
            int prev = arr[curr];
            do {
                int next = (curr + n - step) % n;
                int temp = arr[next];
                arr[next] = prev;
                prev = temp;
                curr = next;
                count++;
            } while (start != curr);
        }
    }

    @Test
    public void test() {
        int[] arr = new int[]{1, 2, 3, 4, 5};
        rotateArr(arr, 2);
        assertArrayEquals(new int[]{3, 4, 5, 1, 2}, arr);

        int[] arr2 = new int[]{2, 4, 6, 8, 10, 12, 14, 16, 18, 20};
        rotateArr(arr2, 3);
        assertArrayEquals(new int[]{8, 10, 12, 14, 16, 18, 20, 2, 4, 6}, arr2);
    }
}
```
