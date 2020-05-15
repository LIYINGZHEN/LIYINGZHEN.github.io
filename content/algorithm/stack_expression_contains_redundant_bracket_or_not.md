---
title:       "Stack - Expression contains redundant bracket or not"
date:        2020-04-30T00:00:00+00:00
author:      "Max"
published:   true
tags:        ["algorithm", "stack"]
---

Given a string of balanced expression, find if it contains a redundant parenthesis or not. A set of parenthesis are redundant if same sub-expression is surrounded by unnecessary or multiple brackets.

Note: Expression may contain `+`, `*`, `–` and `/` operators. Given expression is valid and there are no white spaces present.

**Example:**

```
Input:
((a+b))
(a+(b)/c)
(a+b*(c-d))
Output:
Yes
Yes
No

Explanation:
1. ((a+b)) can reduced to (a+b), this Redundant
2. (a+(b)/c) can reduced to (a+b/c) because b is
surrounded by () which is redundant.
3. (a+b*(c-d)) doesn't have any redundant or multiple
brackets.
```

---

**METHOD 1**

```java
import org.junit.Test;

import java.util.Stack;

import static org.junit.Assert.assertEquals;

public class RedundantBracket {
    // Time: O(n) ; Space: O(n)
    static boolean isRedundant(String s) {
        Stack<Character> st = new Stack<>();
        char[] str = s.toCharArray();

        for (int i = 0; i < str.length; i++) {
            char c = str[i];

            if (c == ')') {
                char top = st.peek();
                st.pop();

                boolean redundant = true;

                while (top != '(') {
                    // Check for operators in expression.
                    if (top == '+' || top == '-' || top == '*' || top == '/') {
                        redundant = false;
                    }
                    top = st.peek();
                    st.pop();
                }

                if (redundant) {
                    return true;
                }
            } else {
                // Push open parenthesis, operators and operands to stack.
                st.push(c);
            }
        }

        return false;
    }

    @Test
    public void test() {
        assertEquals(true, isRedundant("((a+b))"));
        assertEquals(true, isRedundant("(a+(b)/c)"));
        assertEquals(false, isRedundant("(a+b*(c-d))"));
        assertEquals(false, isRedundant("((3-6)*(8-3))"));
    }
}
```
