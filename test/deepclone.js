function deepClone(target, map = new Map()) {
	// 非引用类型直接返回
	if (typeof target === 'object') {
		let cloneTarget = Array.isArray(target) ? [] : {}
		if (map.has(target)) {
			return map.get(target)
		}
		// 利用map来检测循环引用的问题
		map.set(target, cloneTarget)
		for (let key in target) {
			cloneTarget[key] = deepClone(target[key], map)
		}

		return cloneTarget
	} else {
		return target
	}
}

function say() {
	console.log('ok')
}
const oldObj = {
	a: say,
	b: new Array(1),
	c: new RegExp('ab+c', 'i')
}

console.log(deepClone(oldObj))
