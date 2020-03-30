// js 大数相加问题
function sum(a, b) {
	let left = '0' + a
	let right = '0' + b
	// 得到二者的最大长度
	let len = Math.max(left.length, right.length)
	left = left.padStart(len, 0)
	right = right.padStart(len, 0)
	// 设置进位和结果
	let carry = 0
	let sum = ''
	let t = 0
	for (let i = len - 1; i >= 0; i--) {
		t = ~~left[i] + ~~right[i] + carry
		carry = (t / 10) | 0
		sum = t % 10 + sum
	}
	return ~~sum
}

sum(123, 229)
