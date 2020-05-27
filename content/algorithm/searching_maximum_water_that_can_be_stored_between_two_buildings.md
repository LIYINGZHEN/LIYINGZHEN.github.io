---
title:       "Searching - Maximum water that can be stored between two buildings"
date:        2020-04-13T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "searching"]
---

Given an integer array which represents the heights of N buildings, the task is to delete N-2 buildings such that the water that can be trapped between the remaining two building is maximum. Please note that the total water trapped between two buildings is gap between them (number of buildings removed) multiplied by height of the smaller building.

**Examples:**

```
Input: arr[] = {1, 3, 4}
Output: 1
We have to calculate the maximum water that can be stored between any 2 buildings.
Water between the buildings of height 1 and height 3 = 0.
Water between the buildings of height 1 and height 4 = 1.
Water between the buildings of height 3 and height 4 = 0.
Hence maximum of all the cases is 1.


Input: arr[] = {2, 1, 3, 4, 6, 5}
Output: 8
We remove the middle 4 buildings and get the total water stored as 2 * 4 = 8
```

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Question   : https://www.geeksforgeeks.org/maximum-water-that-can-be-stored-between-two-buildings/
 * Complexity : time: O(n) ; space: O(n)
 * Author     : Max
 */
public class MaximumWater {
    static int findMax(int[] arr) {
        int l = 0, h = arr.length - 1;
        int max = 0;

        while (l < h) {
            if (arr[l] < arr[h]) {
                max = Math.max(max, arr[l] * (h - l - 1));
                l++;
            } else {
                max = Math.max(max, arr[h] * (h - l - 1));
                h--;
            }
        }

        return max;
    }

    @Test
    public void test() {
        assertEquals(8, findMax(new int[]{2, 1, 3, 4, 6, 5}));
        assertEquals(1, findMax(new int[]{1, 3, 4}));
        assertEquals(42, findMax(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7}));
    }
}
```
