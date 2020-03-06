// 冒泡排序的思想很简单 就是比较相邻两者的值，大的放后面，但是每一次遍历的边界在发生改变，每一次减一

export default function sort(arr) {
	// 每一次边界减一
	// 这个是索引，要注意，本身就比长度大一，这里要减一
	for (let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (arr[j] > arr[j + 1]) {
				;[ arr[j], arr[j + 1] ] = [ arr[j + 1], arr[j] ]
			}
		}
	}
	return arr
}
