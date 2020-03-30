/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	let n = nums.length
	let map = new Map()
	let count = 1
	nums.forEach((item) => {
		if (!map.has(item)) {
			map.set(item, count)
		} else {
			map.set(item, map.get(item) + 1)
		}
	})
	console.log(map)
	for (let key of map.keys()) {
		if (map.get(key) > n / 2) {
			return key
		}
	}
}
