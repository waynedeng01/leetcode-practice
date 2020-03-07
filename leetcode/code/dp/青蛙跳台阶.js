/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
	// 边界
	if (n === 0) {
		return 1
	}
	if (n === 1) {
		return 1
	}
	if (n === 2) {
		return 2
	}
	let a = 1
	let b = 2
	let temp = 0
	// 第n阶的方法数为n-1的加上n-2的
	for (let i = 3; i <= n; i++) {
		temp = a + b
		a = b
		b = temp
	}
	return temp
}
