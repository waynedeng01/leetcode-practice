// let printin = read_line()
// while (printin) {
// 	let line_second = read_line()
// 	let arr1 = line_second.split(' ')
// 	let arr2 = read_line().split(' ')
// 	let ret = new Set([ ...arr1, ...arr2 ].sort())
// 	console.log(...ret)
// }

function deSame(arr) {
	return [ ...new Set(arr) ].sort((a, b) => a - b)
}

let m, n
let ret = []
while ((n = readInt()) != null && (m = readInt()) != null) {
	// n,m 表示第一行读到的数字
	// 将每个数字都读出来
	for (let i = 0; i < m + n; i++) {
		ret.push(readInt())
	}
	let ary = deSame(ret).join(' ')
	print(ary)
	ret = []
}
