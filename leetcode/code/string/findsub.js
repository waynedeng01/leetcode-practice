// 寻找最长子串

let match = (str) => {
	let j = str.match(/^(0+|1+)/)[0]
	// o 应该为j反转过来的值,先取出一个反转，再repeat j的长度个
	// ^ 是异或的意思，异或1相当于取反
	let o = (j[0] ^ 1).toString().repeat(j.length)
	// console.log(`${o}${j}`)
	// 为了匹配动态的正则，这里使用正则表达式对象
	let reg = new RegExp(`^(${j}${o})`)
	if (reg.test(str)) {
		return RegExp.$1
	} else {
		// Booleen('') -- false
		return ''
	}
}

var countBinarySubstrings = function(s) {
	let ret = []
	// 只需要执行到倒数第二位，因为需要至少保证两位
	for (let i = 0; i < s.length - 1; i++) {
		// match为自定义函数 返回匹配的值
		let r = match(s.slice(i))
		// console.log(r)
		if (r) {
			ret.push(r)
		}
	}
	return ret
}
