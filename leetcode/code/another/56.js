/**
 * @param {number[][]} arr
 * @return {number[][]}
 */
var merge = function(arr) {
	let ret = []
	// 记录intervals的下标
	let index = 1
	if (arr.length === 0) {
		return []
	}
	// 将原数组按照第一个元素升序排列
	let intervals = arr.sort((a, b) => a[0] - b[0])
	// 两两比较
	let walk = (left, right) => {
		if (!right) {
			ret.push(left)
			return
		}
		if (left[1] < right[0] || right[1] < left[0]) {
			index++
			ret.push(left)
			if (!intervals[index]) {
				ret.push(right)
				return
			}
			walk(right, intervals[index])
		} else {
			let arr = [ ...left, ...right ].sort((a, b) => a - b)
			// 取到合并区间的最小最大值
			ret.push([ arr[0], arr.pop() ])
			index++
			if (!intervals[index]) {
				return
			}
			walk(ret.pop(), intervals[index])
		}
	}
	walk(intervals[0], intervals[1])
	return ret
}

merge([ [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 8, 9 ], [ 1, 10 ] ])
