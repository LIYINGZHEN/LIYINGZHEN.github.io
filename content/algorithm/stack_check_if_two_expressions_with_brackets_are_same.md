---
title:       "Stack - Check if two expressions with brackets are same"
date:        2020-04-30T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Given two expressions in the form of strings. The task is to compare them and check if they are similar. Expressions consist of lowercase alphabets, ‘+’, ‘-‘ and ‘( )’.

**Examples:**

```
Input  : exp1 = "-(a+b+c)"
         exp2 = "-a-b-c"
Output : Yes

Input  : exp1 = "-(c+b+a)"
         exp2 = "-c-b-a"
Output : Yes

Input  : exp1 = "a-b-(c-d)"
         exp2 = "a-b-c-d"
Output : No
```

---

**METHOD 1**

```java
package vishwa.class_2020_05_20;

import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertEquals;

/**
 * Author     : Max
 * Question   : https://www.geeksforgeeks.org/check-two-expressions-brackets/
 * Complexity : time: O(n) ; space: O(n)
 */
public class CheckIfTwoExpressionsWithBracketsAreSame {
    static void changeGlobalSign(Stack<Character> s, char[] charArr, int idx) {
        if (idx == 0) {
            s.push('+');
        } else if (charArr[idx - 1] == '-') {
            if (s.peek() == '+') {
                s.push('-');
            } else {
                s.push('+');
            }
        } else {
            if (s.peek() == '+') {
                s.push('+');
            } else {
                s.push('-');
            }
        }
    }

    static void addToResult(char globalSign, StringBuilder result, char[] charArr, int idx) {
        if (idx == 0) {
        } else if (charArr[idx - 1] == '-') {
            if (globalSign == '+') {
                result.append('-');
            } else {
                result.append('+');
            }
        } else {
            if (globalSign == '+') {
                // Prevent result start from +.
                if (result.length() != 0) {
                    result.append('+');
                }
            } else {
                result.append('-');
            }
        }
        result.append(charArr[idx]);
    }

    // Time: O(n) ; Space: O(n)
    static boolean areSame(String exp1, String exp2) {
        StringBuilder result = new StringBuilder();

        // Stack stores the global sign.
        Stack<Character> s = new Stack<>();
        s.push('+');

        char[] charArr = exp1.toCharArray();

        for (int i = 0; i < charArr.length; i++) {
            int c = charArr[i];

            if (c == '+' || c == '-') {
                // Ignore current sign, will check it when later encountering '(' or operands.
                continue;
            } else if (c == '(') {
                changeGlobalSign(s, charArr, i);
            } else if (c == ')') {
                s.pop();
            } else {
                char globalSign = s.peek();
                addToResult(globalSign, result, charArr, i);
            }
        }

        return result.toString().equals(exp2);
    }

    @Test
    public void test() {
        assertEquals(true, areSame("-(a+b+c)", "-a-b-c"));
        assertEquals(true, areSame("-(c+b+a)", "-c-b-a"));
        assertEquals(false, areSame("a-b-(c-d)", "a-b-c-d"));
        assertEquals(true, areSame("(a+b)-(c-d-(e-f))", "a+b-c+d+e-f"));
        assertEquals(true, areSame("(-c)", "-c"));
    }
}
```
