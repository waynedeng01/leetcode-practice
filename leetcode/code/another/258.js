/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	let r
	let acc = (arr) => {
		let ret = arr.reduce((pre, cur) => ~~pre + ~~cur)
		if (ret < 10) {
			r = ret
		} else {
			acc(String(ret).split(''))
		}
	}
	acc(('' + num).split(''))
	return r
	// let arr = ('' + num).split('')
	// let ret = arr.reduce((pre, cur) => pre + cur)
	// console.log(ret)
}
