---
title:       "Array - Find pair in a sorted rotated array"
date:        2020-06-11T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

Given an array that is sorted and then rotated around an unknown point. Find if the array has a pair with a given sum ‘x’. It may be assumed that all elements in the array are distinct.

**Examples :**

```
Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
Output: true
There is a pair (6, 10) with sum 16

Input: arr[] = {11, 15, 26, 38, 9, 10}, x = 35
Output: true
There is a pair (26, 9) with sum 35

Input: arr[] = {11, 15, 26, 38, 9, 10}, x = 45
Output: false
There is no pair with sum 45.
```

---

**METHOD 1**

```java
/**
 * Question   : Find pair in a sorted rotated array
 * Complexity : Time: O(n) ; Space: O(1)
 * Time       : 2020/06/11
 * Author     : Max
 */
public class PairsInSortedRotated {
    static void findPair(int[] arr, int target) {
        if (arr.length == 0) {
            return;
        }

        int n = arr.length;

        int pivot = n - 1;
        for (int i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                pivot = i;
                break;
            }
        }

        int l = (pivot + 1) % n;
        int h = pivot;

        while (l != h) {
            int sum = arr[l] + arr[h];
            if (sum == target) {
                System.out.printf("(%s, %s) ", arr[l], arr[h]);
                if (l == (h - 1 + n) % n) {
                    break;
                }
                h = (h - 1 + n) % n;
                l = (l + 1) % n;
            } else if (sum > target) {
                h = (h - 1 + n) % n;
            } else {
                l = (l + 1) % n;
            }
        }
    }

    public static void main(String[] args) {
        int arr[] = {11, 15, 6, 7, 9, 10};
        int target = 16;
        findPair(arr, target);
    }
}
```
