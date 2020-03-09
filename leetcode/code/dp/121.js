/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if (prices.length === 0) return 0
	// 动态规划思路
	// 状态转移方程 dp[i] = Max(dp[i-1],dp[i]-min)
	// dp[i]表示第i天所能获取到的最大利润
	// min用于记录之前的最小值
	let dp = new Array(prices.length + 1).fill(0)
	let min = prices[0]
	// 边界 第0天的最大收益为0
	dp[0] = 0
	for (let i = 1; i < prices.length; i++) {
		dp[i] = Math.max(dp[i - 1], prices[i] - min)
		min = Math.min(min, prices[i])
	}
	return dp[prices.length - 1]
}

maxProfit([ 7, 1, 5, 3, 6, 4 ])
