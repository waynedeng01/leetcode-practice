/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	// 所谓动态规划也是一步步优化过来的
	// 从最简单的推出状态方程，然后通过递归实现
	// 然后是优化时间复杂度，因为在递归过程，是时刻保持全部子状态的，会有很多重复的结果
	// 所以想到了使用hash map 做缓存，没有结果才将它存进表中，有结果的情况直接从map中取就行
	// 可是这种情况也占据了较高的空间复杂度，所以使用迭代的方式来处理，每次只需要维持前两个状态的值和当前值
	// 如下是代码
	// 边界
	if (n === 1) {
		return 1
	}
	if (n === 2) {
		return 2
	}
	// 状态转移
	// 维持三个变量
	let a = 1
	let b = 2
	let temp = 0
	for (let i = 3; i <= n; i++) {
		temp = a + b
		a = b
		b = temp
	}
	return temp
}
