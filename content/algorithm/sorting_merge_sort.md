---
title:       "Sorting - Merge sort"
date:        2020-03-02T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "sorting"]
---

Implement merge sort.

---

**METHOD 1**

```java
import java.util.Arrays;

/**
 * Question   : https://www.geeksforgeeks.org/counting-inversions/
 * Complexity : Time: O(nlogn) ; Space: O(n)
 * Author     : Max
 */
public class MergeSort {
    public static void merge(int[] arr, int l, int h) {
        if (l >= h) {
            return;
        }

        int m = l + (h - l) / 2;
        int[] leftCopy = new int[m - l + 1];
        int[] rightCopy = new int[h - m];
        for (int i = 0; i < leftCopy.length; i++) {
            leftCopy[i] = arr[l + i];
        }
        for (int i = 0; i < rightCopy.length; i++) {
            rightCopy[i] = arr[m + 1 + i];
        }

        int leftCurr = 0, rightCurr = 0, k = l;
        while (leftCurr < leftCopy.length && rightCurr < rightCopy.length) {
            if (leftCopy[leftCurr] <= rightCopy[rightCurr]) {
                arr[k++] = leftCopy[leftCurr++];
            } else {
                arr[k++] = rightCopy[rightCurr++];
            }
        }
        while (leftCurr < leftCopy.length) {
            arr[k++] = leftCopy[leftCurr++];
        }
        while (rightCurr < rightCopy.length) {
            arr[k++] = rightCopy[rightCurr++];
        }
    }

    public static void mergeSort(int[] arr, int l, int h) {
        if (l >= h) {
            return;
        }

        int m = l + (h - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, h);
        merge(arr, l, h);
    }

    public static void main(String[] args) {
        int[] arr = new int[]{12, 11, 13, 5, 6, 7};
        mergeSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));
    }
}
```
