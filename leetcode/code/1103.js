/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
	let count = 0
	let arr = new Array(num_people).fill(0)
	return walk(arr, candies, count)
}

let walk = (arr, candy, count) => {
	// end
	// const sum = arr.reduce((acc, cur) => acc + cur)
	// 没有糖果剩余
	let len = arr.length
	if (candy === 0) {
		return arr
	}
	let acc = arr[count % len]
	arr[count % len] = acc + count + 1 < acc + candy ? acc + count + 1 : acc + candy
	count++
	candy = candy - count >= 0 ? candy - count : 0
	return walk(arr, candy, count)
}

distributeCandies(60, 4)
