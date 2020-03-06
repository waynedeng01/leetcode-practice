// flower

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
	let arr = flowerbed
	arr.push(0)
	arr.unshift(0)
	let count = 0
	let len = arr.length - 1
	for (let i = 1; i < len; i++) {
		if (arr[i - 1] === arr[i] && arr[i] === arr[i + 1] && arr[i] === 0) {
			count++
			i += 1
		}
	}
	// console.log(`${n}  ${count}`)
	if (count >= n) {
		return true
	} else {
		return false
	}
}
