// 选择排序
// 基本思想是，每次取当前值为假定最小值，往后面找，如果有比它小的值就交换
function chooseSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = arr[i]
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < min) {
				// 这里只改变了min的值，并没有改变arr[i]的值，如果要使每次开始遍历的值为最小，应当把arr[i]的值改变
				;[ min, arr[j] ] = [ arr[j], min ]
			}
		}
		arr[i] = min
	}
	return arr
}

chooseSort([ 1, 3, 6, 4, 5, 7 ])

// 冒泡排序
function maoSort(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				;[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ]
			}
		}
	}
	return arr
}

maoSort([ 1, 3, 6, 4, 5, 7 ])
