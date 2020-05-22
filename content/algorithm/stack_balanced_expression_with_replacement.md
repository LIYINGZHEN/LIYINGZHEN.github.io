---
title:       "Stack - Balanced expression with replacement"
date:        2020-04-27T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Given a string that contains only the following => ‘{‘, ‘}’, ‘(‘, ‘)’, ‘[’, ‘]’. At some places there is ‘X’ in place of any bracket. Determine whether by replacing all ‘X’s with appropriate bracket, is it possible to make a valid bracket sequence.

**Examples:**

```
Input : S = "{(X[X])}"
Output : Balanced
The balanced expression after
replacing X with suitable bracket is:
{([[]])}.

Input : [{X}(X)]
Output : Not balanced
No substitution of X with any bracket
results in a balanced expression.
```

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/balanced-expression-replacement/
 * Complexity : time: O(2^n * n) ; space: O(n)
 */

public class BalancedExpressionWithReplacement {
    static boolean isOpenBracket(char c) {
        return c == '(' || c == '[' || c == '{';
    }

    static boolean isClosingBracket(char c) {
        return c == ')' || c == ']' || c == '}';
    }

    static boolean isValid(char a, char b) {
        if (a == 'X' || (a == '{' && b == '}') || (a == '[' && b == ']') || (a == '(' && b == ')')) {
            return true;
        }
        return false;
    }

    static boolean isBalanced(Stack<Character> s, char[] charArray, int idx) {
        if (idx >= charArray.length) {
            return s.isEmpty();
        }

        char c = charArray[idx];

        if (isOpenBracket(c)) {
            s.push(c);
            return isBalanced(s, charArray, idx + 1);
        } else if (isClosingBracket(c)) {
            if (s.isEmpty()) {
                return false;
            }
            if (!isValid(s.peek(), c)) {
                return false;
            }
            s.pop();
            return isBalanced(s, charArray, idx + 1);
        } else if (c == 'X') {
            // Assume X is an open bracket.
            Stack<Character> temp = new Stack<>();
            temp.addAll(s);
            temp.push(c);
            if (isBalanced(temp, charArray, idx + 1)) {
                return true;
            }

            // Assume X is an closing bracket.
            if (s.isEmpty()) {
                return false;
            }
            s.pop();
            return isBalanced(s, charArray, idx + 1);
        }

        return false;
    }

    static boolean check(String exp) {
        Stack<Character> s = new Stack<>();
        char[] charArr = exp.toCharArray();
        return isBalanced(s, charArr, 0);
    }

    @Test
    public void test() {
        assertEquals(true, check("{(X[X])}"));
        assertEquals(false, check("[{X}(X)]"));

    }
}
```
