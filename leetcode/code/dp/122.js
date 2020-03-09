// 接上122

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
// 	if (prices.length === 0) return 0
// 	// 动态规划思路
// 	// dp[i]仍表示第i天的最大利润
// 	let dp = new Array(prices.length + 1).fill(0)
// 	// 边界
// 	let min = prices[0]
// 	dp[0] = 0
// 	for (let i = 1; i < prices.length; i++) {
// 		dp[i] = Math.max(dp[i - 1], dp[i - 1] + prices[i] - min)
// 		min = Math.min(min, prices[i])
// 	}
// 	return dp[prices.length - 1]
// }

// 此题使用动态规划的话还需考虑到前一天对股票的持有情况
// 应该通过不同的状态来标识

// 改用贪心思路
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	// 记录最大利润
	let count = 0
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] > prices[i - 1]) {
			// 只要是上升趋势，就加上两者的差值
			count += prices[i] - prices[i - 1]
		}
	}
	return count
}
