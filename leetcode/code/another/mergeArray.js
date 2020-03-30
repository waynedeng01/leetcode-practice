/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
	A.splice(m, n, ...B)
	// 要求的是对A的改变，所以单独拿改变后的数组进行一次排序
	A.sort((a, b) => a - b)
}

merge([ 1, 2, 3, 0, 0, 0 ], 3, [ 2, 5, 6 ], 3)
