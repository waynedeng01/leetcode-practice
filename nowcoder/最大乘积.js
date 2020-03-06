let input = []
while ((line = readline())) {
	input.push(line)
}

let length = input[0]
let arr = input[1].split(' ')

if (length < 3) {
	console.log('0')
} else {
	// 全为正数的情况
	if (!arr.find((item) => item <= 0)) {
		let next = arr.sort((a, b) => b - a)
		console.log(next[0] * next[1] * next[2])
	} else if (!arr.find((item) => item >= 0)) {
		let next = arr.sort((a, b) => b - a)
		console.log(next[0] * next[1] * next[2])
	} else if (arr.find()) {
	}
}
