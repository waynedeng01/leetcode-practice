// 电话号码组合
var letterCombinations = function(digits) {
	const num2letter = {
		'2': [ 'a', 'b', 'c' ],
		'3': [ 'd', 'e', 'f' ],
		'4': [ 'g', 'h', 'i' ],
		'5': [ 'j', 'k', 'l' ],
		'6': [ 'm', 'n', 'o' ],
		'7': [ 'p', 'q', 'r', 's' ],
		'8': [ 't', 'u', 'v' ],
		'9': [ 'w', 'x', 'y', 'z' ]
	}
	//处理length<2的情况
	if (digits.length === 0) return []
	if (digits.length === 1) return num2letter[digits]
	let arr = []
	for (let item of digits) {
		// 将所输入数字对应的字母保存在数组中，方便后序两两比较
		arr.push(num2letter[item])
	}

	let res = arr.reduce((pre, cur) => {
		// temp必须为内部变量，如果为全局变量的话，它将会将所有的值都保存下来
		// 放在的内部的话，每更新一次pre，它的值就会清空
		let temp = []
		pre.map((item1) => {
			cur.map((item) => {
				temp.push(item1 + item)
			})
		})
		// 这里必须return 否则pre的值将变为undefined
		return temp
	})

	return res
}

// letterCombinations('234')
