/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	// 分析一下得出普遍解法
	// 每一圈可以有同样的步骤
	// 排除一些意外情况
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i].length === 1) {
			return matrix
		}
	}
	let walk = (arr, r = []) => {
		// 1.将数组的第一排加入到结果集中
		for (let i = 0; i < arr.length; i++) {
			if (i === 0) {
				r = r.concat(arr[i])
			} else if (i === arr.length - 1) {
				// 如果是最后一排
				r = r.concat(arr[i].reverse())
			} else {
				r.push(arr[i].pop())
			}
		}
		// 弹出首尾两行
		arr.shift()
		arr.pop()
		for (let i = arr.length - 1; i >= 0; i--) {
			if (arr[i].length === 0) {
				continue
			}
			r.push(arr[i].shift())
		}
		// 执行完一圈以后判断是否还有值
		if (arr[0].length) {
			return walk(arr, r)
		} else {
			return r
		}
	}
	return walk(matrix, [])
}
