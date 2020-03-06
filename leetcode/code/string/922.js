/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
	let arr = A.sort()
	let res = []
	// 偶元素索引
	let even = 0
	// 奇元素索引
	let odd = 1
	arr.forEach((item) => {
		if (item % 2 === 0) {
			res[even] = item
			even += 2
		} else {
			res[odd] = item
			odd += 2
		}
	})
	return res
}
