var isUgly = (n) => {
	if (n < 1) return false
	while (n !== 1) {
		if (n % 2 === 0) n /= 2
		else if (n % 3 === 0) n /= 3
		else if (n % 5 === 0) n /= 5
		else return false
	}
	return true
}

var nthUglyNumber = function(n) {
	// 用于存放所有的丑数
	let ret = []
	// 记录丑数的个数
	let count = 0
	for (let i = 1; i < +Infinity; i++) {
		if (count > n) break
		else if (isUgly(i)) {
			ret.push(i)
			count++
		}
	}
	console.log(ret)
	return ret[n - 1]
}

nthUglyNumber(4)

// 上面的方法可以实现但是超出了leetcode的时间限制

// 所以需要用到一种三指针的方法 对应三个不同的质因数
var nthUglyNumber = function(n) {
	// 存储结果的数组 默认值为1
	let ret = [ 1 ]
	// 所有的丑数都是由2,3,5这三个因子组成的
	let r2 = 0,
		r3 = 0,
		r5 = 0
	let min
	// 总体思路是每次存入三个因子乘出来值的最小值，改变三个因子的值
	while (ret.length < n) {
		min = Math.min(ret[r2] * 2, ret[r3] * 3, ret[r5] * 5)
		// 谁被存入了就改变谁
		if (min === ret[r2] * 2) r2++
		if (min === ret[r3] * 3) r3++
		if (min === ret[r5] * 5) r5++
		ret.push(min)
	}
	return ret[n]
}

// 超级丑数
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
	let ret = [ 1 ]
	primes.forEach((item) => {})
}
