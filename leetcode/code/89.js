/**
 * @param {number} n
 * @return {number[]}
 */
// var grayCode = function(n) {
// 	if (n === 1) {
// 		return [ '0', '1' ]
// 	} else {
// 		// 规律是高位0,1个数相同，其他位为n-1位时的格雷编码排列 --对称
// 		// 这里得到后面低位的码
// 		let endCode = grayCode(n - 1)
// 		let maxIdx = Math.pow(2, n) - 1
// 		let ret = []
// 		for (let i = 0; i < endCode.length; i++) {
// 			ret[i] = `0${endCode[i]}`
// 			ret[maxIdx - i] = `1${endCode[i]}`
// 		}
// 		// parseInt 具有转换进制的功能
// 		// 将v看成2进制，返回10进制
// 		const finRet = ret.map((v) => parseInt(v, 2).toString())
// 		// console.log(finRet)
// 		return finRet
// 	}
// }

var grayCode = function(n) {
	if (n === 0) {
		return [ 0 ]
	}

	if (n === 1) {
		return [ 0, 1 ]
	}
	// 将上一次的结果取反求十进制，再与上一次的结果并起来，注意顺序
	let formerGrayCode = grayCode(n - 1)
	return [ ...formerGrayCode, ...formerGrayCode.reverse().map((v) => v + Math.pow(2, n - 1)) ]
}

// grayCode(4)
