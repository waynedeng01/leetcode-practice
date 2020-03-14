// 辗转相除法求最大公因数
// 1，求最大公因数
let maxCommon = (a, b) => {
	if (b === 0) return a
	return a % b === 0 ? b : maxCommon(b, a % b)
}

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
	let GCD = maxCommon(str1.length, str2.length)
	let count = str1.length / GCD
	let ret = ''
	let start = 0
	while (start < str1.length) {
		if (str2.indexOf(str1.substr(start, GCD)) !== -1) {
			ret += str1.substr(start, GCD)
			return ret.repeat(count) === str1 ? ret : ''
		} else {
			start++
		}
	}
	return ret
}

gcdOfStrings('ABCDEF', 'ABC')

// indexOf 的用法是搜索值作为参数（短的）
