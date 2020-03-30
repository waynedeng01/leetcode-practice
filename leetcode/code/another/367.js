/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
	if (num === 0) {
		return false
	}
	if (num === 1) {
		return true
	}
	let end = num / 2
	for (let i = 2; i <= end; i++) {
		if (Math.pow(i, 2) === num) return true
	}
	return false
}
