---
title: "LeetCode - 121. Best Time to Buy and Sell Stock"
date: 2019-06-20T00:00:00+00:00
author: "Max"
published: true
tags: ["leetcode"]
---

[LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Problem Statement

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

*Example: 1*

```js
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
```

*Example: 2*

```js
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

## Solution

```go
func maxProfit(prices []int) int {
	if (len(prices) == 0) {
		return 0
	}

	max := 0
	buyPrice := prices[0]

	for _, price := range prices[1:] {
		if price < buyPrice {
			buyPrice = price
		} else {
			earn := price - buyPrice
			if earn > max {
				max = earn
			}
		}
	}

	return max
}
```
