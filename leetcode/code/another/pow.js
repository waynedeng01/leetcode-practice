// 分析
// 总共有几种情况
// 如果 n 为 0，那结果为 1
// 如果 n 为 1，那结果为 x
// 如果 n < 0, n = -n, x = 1/x
// 如果 n > 0，正常计算

var myPow = function(x, n) {
	if (n === 0) return 1
	if (n === 1) return x
	if (n < 0) {
		n = -n
		x = 1 / x
	}
	// 二分递归,将每个数拆成等值的两个数相乘，可一直拆分，到 n === 0 || 1 的时候结束
	// ~~相当于取整，对整数负数都有效，正数向下取整，负数向上
	let temp = myPow(x, ~~(n / 2))
	if (n % 2 === 0) {
		return temp * temp
	} else {
		// 奇数还需要再乘上本身
		return temp * temp * x
	}
}
