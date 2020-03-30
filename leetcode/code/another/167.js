/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	// 数组的第一个元素下标为1
	const map = new Map()
	let len = numbers.length
	for (let i = 0; i < len; i++) {
		let need = target - numbers[i]
		if (map.has(numbers[i])) {
			console.log('ok')
			return [ map.get(numbers[i]), i + 1 ]
		}
		map.set(need, i + 1)
	}
	console.log(numbers[2])
}
