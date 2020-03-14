// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
// var uniquePathsWithObstacles = function(obstacleGrid) {
// 	// m,n是通过参数二维数组给出的
// 	// 本题使用动态规划，先聊一聊动态规划的一些概念
// 	// 1.边界（无法拆分的临界点） 2.状态转移方程（拆分问题的方程） 3.最优子结构
// 	// 使用递归实现
// 	let arr = obstacleGrid
// 	let m = arr.length
// 	let n = arr[0].length
// 	let dp = (m, n) => {
// 		// 因为状态转移方程我们分析出只和 m,n 有关
// 		// F(m,n) = F(m,n-1) + F(m-1,n)
// 		// 最后会拆解到边界，所以我们考虑一下边界
// 		// 两行两列
// 		if (m === 2 && n === 2) {
// 			// 考虑障碍物
// 			return arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2 ? 0 : arr[0][1] === 1 || arr[1][0] === 1 ? 1 : 2
// 		} else if (m < 2 || n < 2) {
// 			// 单行 不能有障碍物
// 			if (m < 2) {
// 				return arr[m - 1].includes(1) ? 0 : 1
// 			}
// 			if (n < 2) {
// 				for (let i = 0; i < arr.length; i++) {
// 					if (arr[i][0] === 1) {
// 						return 0
// 					}
// 				}
// 				return 1
// 			}
// 		} else {
// 			return dp(m, n - 1) + dp(m - 1, n)
// 		}
// 	}
// 	return dp(m, n)
// }

// uniquePathsWithObstacles([ [ 0, 0, 0 ], [ 0, 1, 0 ], [ 0, 0, 0 ] ])

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
	let arr = obstacleGrid
	let m = 2
	let n = arr[0].length
	let dp = (m, n) => {
		if (m === 2 && n === 2) {
			// 考虑障碍物
			return arr[1][1] === 'X' || arr[1][0] + arr[0][0] === 'XX'
				? -1
				: arr[1][0] === 'X' || arr[0][0] === 'X' ? 1 : 2
		} else if (n < 2) {
			return -1
		} else {
			return dp(m, n - 1) + dp(m - 1, n)
		}
	}
	return dp(m, n)
}

uniquePathsWithObstacles([ [ '.', '.', 'X', '.', 'X' ], [ 'X', 'X', '.', '.', '.' ] ])
// let line_one = []
// let line_two = []
// while ((n = readInt() != null)) {
// 	for (let i = 0; i < n; i++) {
// 		line_one.push(readInt())
// 	}
// 	for (let i = 0; i < n; i++) {
// 		line_two.push(readInt())
// 	}
// 	let ret = uniquePathsWithObstacles([ line_one, line_two ])
// 	print(ret)
// }

let count = 0
function execCount(n, k, l, r) {
	let arr = []
	for (let i = 0; i < n; i++) {
		for (let j = l; j <= r; j++) {
			arr[i] = j
		}
	}
}
