/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
	let stack = []
	for (let i = 0, len = ops.length; i < len; i++) {
		if (isNaN(Number(ops[i])) !== true) {
			stack.push(~~ops[i])
		} else if (ops[i] === '+') {
			let copy = [].concat(stack)
			let first = copy.pop()
			let second = copy.pop()
			stack.push(~~first + ~~second)
		} else if (ops[i] === 'D') {
			let copy = [].concat(stack)
			let val = copy.pop()
			stack.push(~~val * 2)
		} else if (ops[i] === 'C') {
			stack.pop()
		}
	}

	return stack.reduce((acc, cur) => acc + cur)
}

// calPoints([ '5', '2', 'C', 'D', '+' ])
