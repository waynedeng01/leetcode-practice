/**
 * @param {number[]} nums
 * @return {number}
 */

//  之前写了查找写法，这里采用dp的思想
var lengthOfLIS = function(nums) {
	let len = nums.length
	// 初始状态设为1是因为本题条件中最短的上升子序列都为1
	let dp = new Array(len).fill(1)
	// 同理假定dp[i]表示前i个数中最长上升子序列
	for (let i = 1; i < nums.length; i++) {
		for (j = 0; j < i; j++) {
			// 严格递增
			dp[i] = Math.max(dp[i], nums[i] > nums[j] ? dp[j] + 1 : 1)
		}
	}
	// 循环完后dp应该满足条件了，取其中最大值
	dp.sort((a, b) => b - a)
	return dp[0]
}
