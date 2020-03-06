/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s === '') return true
	let arr = s.split('')
	let stack = []
	let map = new Map()
	map.set('(', -1)
	map.set(')', 1)
	map.set('[', -2)
	map.set(']', 2)
	map.set('{', -3)
	map.set('}', 3)
	for (let i = 0; i < arr.length; i++) {
		// 如果是左半边括号，压栈
		if (map.get(arr[i]) < 0) {
			stack.push(map.get(arr[i]))
		} else {
			// 得到最后一个元素
			let last = stack.pop()
			if (last + map.get(arr[i]) !== 0) {
				return false
			}
		}
	}
	if (stack.length > 0) return false
	return true
}
