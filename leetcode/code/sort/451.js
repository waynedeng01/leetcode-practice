/**
 * @param {string} s
 * @return {string}
 */
// 之前思路也是正确的，不过这里更推荐使用 hash Map

var frequencySort = function(s) {
	let map = new Map()
	// 利用 Map 也可以间接实现去重的效果
	let arr = s.split('')
	arr.forEach((item) => {
		// 如果 map 中没有这个键
		if (!map.get(item)) {
			map.set(item, 1)
		} else {
			// 如果本身有 则每次加一
			map.set(item, map.get(item) + 1)
		}
	})
	let retArr = []
	for (let item of map.keys()) {
		retArr.push({ key: item, count: map.get(item) })
	}
	// 按照count数降序排列
	retArr.sort((a, b) => b.count - a.count)
	return retArr
		.map((item) => {
			return item.key.repeat(item.count)
		})
		.join('')
}

frequencySort('tree')
