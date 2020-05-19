---
title:       "Stack - Next greater element in an array"
date:        2020-04-29T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

In a party of N people, only one person is known to everyone. Such a person may be present in the party, if yes, (s)he doesn’t know anyone in the party. We can only ask questions like “does A know B? “. Find the stranger (celebrity) in the minimum number of questions.

We can describe the problem input as an array of numbers/characters representing persons in the party. We also have a hypothetical function HaveAcquaintance(A, B) which returns true if A knows B, false otherwise. How can we solve the problem.

**Examples:**

```
Input:
MATRIX = { {0, 0, 1, 0},
           {0, 0, 1, 0},
           {0, 0, 0, 0},
           {0, 0, 1, 0} }
Output:id = 2
Explanation: The person with ID 2 does not
know anyone but everyone knows him

Input:
MATRIX = { {0, 0, 1, 0},
           {0, 0, 1, 0},
           {0, 1, 0, 0},
           {0, 0, 1, 0} }
Output: No celebrity
Explanation: There is no celebrity.
```

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/the-celebrity-problem/
 * Complexity : time: O(n) ; space: O(n)
 */

public class TheCelebrityProblem {
    static boolean knows(int[][] martix, int a, int b) {
        return martix[a][b] == 1;
    }

    static int findCelebrity(int[][] martix) {
        int n = martix.length;
        Stack<Integer> s = new Stack<>();
        for (int i = 0; i < n; i++) {
            s.push(i);
        }

        while (s.size() > 1) {
            int a = s.pop();
            int b = s.pop();
            if (knows(martix, a, b)) {
                s.push(b);
            } else {
                s.push(a);
            }
        }

        int c = s.pop();

        for (int i = 0; i < martix.length; i++) {
            if (i == c) {
                continue;
            }
            if ((knows(martix, c, i) || !knows(martix, i, c))) {
                return -1;
            }
        }

        return c;
    }

    @Test
    public void test() {
        int[][] matrix = { { 0, 0, 1, 0 }, { 0, 0, 1, 0 }, { 0, 0, 0, 0 }, { 0, 0, 1, 0 } };
        assertEquals(2, findCelebrity(matrix));
    }
}
```
