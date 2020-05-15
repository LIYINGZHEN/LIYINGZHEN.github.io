---
title:       "Sorting - Quick sort"
date:        2020-04-15T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "sorting"]
---

Implement Quicksort.

---

**METHOD 1**

```java
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

public class QuickSort {
    static void swap(int[] arr, int a, int b) {
        int temp = arr[b];
        arr[b] = arr[a];
        arr[a] = temp;
    }

    static int partiton(int[] arr, int l, int h) {
        int pivot = arr[h];

        int i = l, p = l;

        while (i < h) {
            if (arr[i] < pivot) {
                swap(arr, i, p);
                p++;
            }
            i++;
        }
        swap(arr, i, p);

        return p;
    }

    // Time: O(nlogn) ; Space: O(1)
    // In-place
    static void quickSort(int[] arr, int l, int h) {
        if (l >= h) {
            return;
        }

        int p = partiton(arr, l, h);
        quickSort(arr, l, p - 1);
        quickSort(arr, p + 1, h);
    }

    @Test
    public void test() {
        int[] arr = {5, 4, 3, 2, 1};
        quickSort(arr, 0, arr.length - 1);
        assertArrayEquals(new int[]{1, 2, 3, 4, 5}, arr);
    }
}
```
