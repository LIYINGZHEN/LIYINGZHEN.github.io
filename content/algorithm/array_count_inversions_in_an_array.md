---
title:       "Array - Count inversions"
date:        2020-04-21T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

Inversion Count for an array indicates – how far (or close) the array is from being sorted. If array is already sorted then inversion count is 0. If array is sorted in reverse order that inversion count is the maximum.

Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j

```
Example:

Input: arr[] = {8, 4, 2, 1}
Output: 6

Explanation: Given array has six inversions:
(8,4), (4,2),(8,2), (8,1), (4,1), (2,1).

Input: arr[] = {3, 1, 2}
Output: 2

Explanation: Given array has two inversions:
(3, 1), (3, 2)
```

**METHOD 1**

```java
public class CountInversions {
    static int merge(int[] arr, int l, int h) {
        if (l >= h) {
            return 0;
        }

        int m = l + (h - l) / 2;
        int[] left = new int[m - l + 1];
        int[] right = new int[h - m];
        for (int i = 0; i < left.length; i++) {
            left[i] = arr[l + i];
        }
        for (int i = 0; i < right.length; i++) {
            right[i] = arr[m + 1 + i];
        }

        int i = 0, j = 0, k = l, count = 0;
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
                count += (m - l + 1) - i;
            }
        }
        while (i < left.length) {
            arr[k++] = left[i++];
        }
        while (j < right.length) {
            arr[k++] = right[j++];
        }

        return count;
    }

    static int mergeSort(int[] arr, int l, int h) {
        if (l >= h) {
            return 0;
        }

        int m = l + (h - l) / 2;
        int left = mergeSort(arr, l , m);
        int right = mergeSort(arr, m + 1, h);

        return left + right + merge(arr, l, h);
    }

    public static void main(String[] args) {
        int[] arr = { 1, 20, 6, 4, 5 };
        System.out.println(mergeSort(arr, 0, arr.length - 1));
    }
}
```
