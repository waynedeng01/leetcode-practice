// /**
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// var coinChange = function(coins, amount) {
// 	let count = 0
// 	let sort = coins.sort((a, b) => b - a)
// 	return walk(sort, 0, amount, count)
// }

// let walk = (sort, index, amount, count) => {
// 	// 边界
// 	if (index === sort.length) {
// 		if (amount > 0) {
// 			return -1
// 		} else {
// 			return count
// 		}
// 	}
// 	if (amount >= sort[index]) {
// 		let n = (amount / sort[index]) | 0
// 		amount -= n * sort[index]
// 		count += n
// 	}
// 	if (amount > 0) {
// 		return walk(sort, index + 1, amount, count)
// 	} else if (amount === 0) {
// 		return count
// 	}
// }

// 上面是用贪心做的，思路没问题，边界有点点问题

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
	// dp[i]表示面值为i的时候所需要使用的最少的纸币数量
	let dp = new Array(amount + 1).fill(Infinity)
	// 边界
	dp[0] = 0
	for (let coin of coins) {
		for (let i = 1; i <= amount; i++) {
			if (i - coin >= 0) {
				// 就拿[1,2,5],11参数举例
				// 最后一次可以看成(dp[6]+1,dp[10]+1,dp[9]+1)中的最小值
				// 这个+1就是这三种面值中的一张，因为最后确定了只能是这三种面值中拿一张所以是+1
				dp[i] = Math.min(dp[i], dp[i - coin] + 1)
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount]
}

coinChange([ 1, 2, 5 ], 11)
