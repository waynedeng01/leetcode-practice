// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseWords = function(s) {
// 	let reg = /\s+/
// 	let ret = s.split(reg).reverse().join(' ')
// 	if (!/^\s+/.test(ret) && !/\s+$/.test(ret)) {
// 		return ret
// 	} else {
// 		return ret.replace(/^\s+|\s+$/, '')
// 	}
// }

var longestCommonPrefix = function(strs) {
	let firstStr = strs[0]
	let ret = ''
	if (!strs.length) {
		return ret
	}
	// string 也有length
	for (let i = 0; i < firstStr.length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (firstStr[i] !== strs[j][i]) {
				return ret
			}
		}
		ret += firstStr[i]
	}
	return ret
}
