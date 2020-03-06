// 参数为一个数组
// function flatten(arr) {
// 	let ret = []
// 	// 新增一个递归函数，防止每次递归覆盖ret
// 	let walk = (arr) => {
// 		for (let i = 0; i < arr.length; i++) {
// 			if (Array.isArray(arr[i])) {
// 				walk(arr[i])
// 			} else {
// 				ret.push(arr[i])
// 			}
// 		}
// 		return ret
// 	}
// 	return walk(arr)
// }

// let arr = [ 1, [ 2, [ 3, 4 ] ] ]
// console.log(flatten(arr))

function flatten(arr) {
	// 判断arr的当前项是否为数组
	while (arr.some((item) => Array.isArray(item))) {
		// 每次打开一层
		arr = [].concat(...arr)
	}
	return arr
}

let arr = [ 1, [ 2, [ 3, 4 ] ] ]
console.log(flatten(arr))
