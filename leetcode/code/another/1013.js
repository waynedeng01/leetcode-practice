// 将数组分成和相等的三个部分
// 双指针解法

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
	// 边界情况
	let sum = A.reduce((acc, cur) => acc + cur)
	if (sum % 3 !== 0) {
		return false
	}
	let avg = sum / 3
	// 设立两个指针
	let l = 0
	let r = A.length - 1
	// 处理 [1,-1,1,-1]的case
	let lSum = A[l]
	let rSum = A[r]
	let res = false
	while (l < r) {
		if (lSum !== avg) {
			l++
			lSum += A[l]
		}
		if (rSum !== avg) {
			r--
			rSum += A[r]
		}
		if (lSum === avg && rSum === avg) {
			res = true
			break
		}
	}
	return res && r - l > 1
}
