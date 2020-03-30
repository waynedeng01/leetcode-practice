/**
 * @param {number} target
 * @return {number[][]}
 */
// 本题可以使用滑动窗口来解
// 所谓滑动窗口，可以理解为我们的目标结果集就是窗口中的数
// 为了方便编程，我们也一般会设计为左闭右开，并且一般设计为左边界和右边界都只向右滑动
var findContinuousSequence = function(target) {
	let i = 1
	let j = 1
	let res = []
	// 本题的思路是while循环，如果窗口中的值相加<target,那么右边界右移，同理可推
	let sum = 0
	while (i <= target / 2) {
		if (sum < target) {
			// 注意因为sum最初为0，所以这里应该是这个顺序
			sum += j
			j++
		} else if (sum > target) {
			sum -= i
			i++
		} else {
			// 相等的情况
			let arr = []

			for (let val = i; val < j; val++) {
				arr.push(val)
			}

			// 添加进结果集，然后开始下次计算
			res.push(arr)
			// 左边界右移
			sum -= i
			i++
		}
	}
	return res
}

console.log(findContinuousSequence(9))
