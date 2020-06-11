---
title:       "Array - Rearrange an array so that arr[i] becomes arr[arr[i]]"
date:        2020-06-11T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

Given an array arr[] of size n where every element is in range from 0 to n-1. Rearrange the given array so that arr[i] becomes arr[arr[i]]. This should be done with O(1) extra space.

**Example:**

```
Input: arr[]  = {3, 2, 0, 1}
Output: arr[] = {1, 0, 3, 2}
```

---

**METHOD 1**

```java
import java.util.Arrays;

/**
 * Question   : Rearrange an array so that arr[i] becomes arr[arr[i]]
 * Complexity : Time: O(n) ; Space: O(n)
 * Time       : 2020/06/11
 * Author     : Max
 */
public class Rearrange {
    static void rearrange(int[] arr) {
        // The value we get module with n will be the original number.
        // The value we get devide by   n will be the result number.

        // Input: arr[]  = {3, 2, 0, 1}
        // n = 4

        // i = 0 => Output: arr[] = {3+4*1, 2, 0, 1}
        // i = 1 => Output: arr[] = {3+4*1, 2+4*0, 0, 1}
        // i = 2 => Output: arr[] = {3+4*1, 2+4*0, 0+4*3, 1}
        // i = 3 => Output: arr[] = {3+4*1, 2+4*0, 0+4*3, 1+4*2}

        // Output: arr[] = {1, 0, 3, 2}

        int n = arr.length;

        for (int i = 0; i < n; i++) {
            int position = arr[i] % n;
            int value = arr[position] % n;
            arr[i] += (value * n);
        }
        for (int i = 0; i < n; i++) {
            arr[i] /= n;
        }
    }

    static void rearrangeExtra(int[] arr) {
        int n = arr.length;
        int[] newArray = new int[n];

        for (int i = 0; i < n; i++) {
            newArray[i] = arr[arr[i]];
        }

        System.out.println(Arrays.toString(newArray));
    }

    public static void main(String[] args) {
        int[] arr = new int[]{3, 2, 0, 1};
        rearrange(arr);
        System.out.println(Arrays.toString(arr));
    }
}
```
