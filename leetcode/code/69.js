/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
	if (x === 0 || x === 1) {
		return x
	}
	// 返回值为直接舍去小数部分的整数
	// 1.直接满足条件
	let end = x / 2
	for (let i = 1; i <= end; i++) {
		if (Math.pow(i, 2) === x) {
			return i
		} else if (Math.pow(i, 2) < x && x < Math.pow(i + 1, 2)) {
			return i
		}
	}
}
