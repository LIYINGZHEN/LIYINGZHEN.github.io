---
title:       "Array - Spiral Matrix"
date:        2020-06-10T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "array"]
---

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

**Example 1:**

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

---

**METHOD 1**

```java
package test;

import org.junit.Test;

/**
 * Question   : Spiral Matrix
 * Complexity : Time: O(m*n) ; Space: O(1)
 * Time       : 2020/06/10
 * Author     : Max
 */
public class SpiralMatrix {
    static void print(int[][] matrix) {
        int rowsCount = matrix.length;
        int colsCount = matrix[0].length;

        int rowStart = 0, colStart = 0, rowEnd = rowsCount - 1, colEnd = colsCount - 1;

        while (rowStart <= rowEnd && colStart <= colEnd) {
            for (int col = colStart; col <= colEnd; col++) {
                System.out.printf(matrix[rowStart][col] + " ");
            }
            rowStart++;
            for (int row = rowStart; row <= rowEnd; row++) {
                System.out.printf(matrix[row][colEnd] + " ");
            }
            colEnd--;
            if (rowStart <= rowEnd && colStart <= colEnd) {
                // Row end, Column left
                for (int col = colEnd; col >= colStart; col--) {
                    System.out.printf(matrix[rowEnd][col] + " ");
                }
                rowEnd--;
                // Column end, Row left
                for (int row = rowEnd; row >= rowStart; row--) {
                    System.out.printf(matrix[row][colStart] + " ");
                }
                colStart++;
            }
        }
    }

    @Test
    public void test() {
        int[][] arr = new int[][]{
                {1, 2, 3, 4},
                {5, 6, 7, 8},
                {9, 10, 11, 12},
                {13, 14, 15, 16}
        };
        print(arr);

        System.out.println();

        int[][] arr2 = new int[][]{
                {1, 2, 3, 4, 5, 6},
                {7, 8, 9, 10, 11, 12},
                {13, 14, 15, 16, 17, 18},
        };
        print(arr2);

        System.out.println();

        int[][] arr3 = new int[][]{
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9},
                {10, 11, 12},
                {13, 14, 15},
                {16, 17, 18},
        };
        print(arr3);
    }
}
```
