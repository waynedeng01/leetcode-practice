/**
 * @param {string} s
 * @return {boolean}
 */
// 直接用正则匹配一个或者多个重复的子串
var repeatedSubstringPattern = function(s) {
	return /^(\w+)1+$/.test(s)
}

// reg test
// 匹配十六进制颜色
let reg = /#([0-9a-fA-F]{6}|[0-9a-fA-f]{3})/g
var string = '#ffbbad #Fc01DF #FFF #ffE'
console.log(string.match(reg))

// 匹配时间 24小时制

let regex = /([01][0-9]|[2][0-3]):[0-5][0-9]/
console.log(regex.test('23:59'))
console.log(regex.test('02:07'))

// 数字的千位分隔符表示法

let reg = /(?!^)(?=(\d{3})+$)/g

// 模拟字符串 trim 方法

let reg = /^s+|s+$/g

function trim(str) {
	return str.replace(reg, '')
}

console.log(trim('  foobar   '))
