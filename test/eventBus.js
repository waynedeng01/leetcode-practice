// class EventBus {
// 	// 存储事件
// 	constructor() {
// 		this._events = new Map()
// 	}
// 	emit(type, ...args) {
// 		let handle = this._events.get(type)
// 		if (args.length > 0) {
// 			handle.call(this, ...args)
// 		}
// 	}
// }

// var bus = new EventBus()

// bus.emit('type', ok)

// // 二分查找法

// function twoSearch(target, nums) {
// 	let low = 0
// 	let high = nums.length - 1
// 	while (low < high) {
// 		let middle = Math.floor((high + low) / 2)
// 		if (target > middle) {
// 			low = middle + 1
// 		} else if (target < middle) {
// 			high = middle - 1
// 		} else {
// 			return middle
// 		}
// 	}
// }

// // 解析URL
// let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'

// function parseUrl(url) {
// 	// 先得到参数
// 	let reg = /.+\?(.+)$/
// 	// console.log(reg.exec(url))
// 	let arr = reg.exec(url)[1].split('&')
// 	// 将等号两边的 key value 提取出来
// 	let ret = {}
// 	arr.forEach((item) => {
// 		let [ key, val ] = item.split('=')
// 		if (!val) {
// 			ret[key] = true
// 		}
// 		// console.log(key, val)
// 		ret[key] = decodeURI(val)
// 	})
// 	return ret
// }

// parseUrl(url)

// 模板引擎
// let template = '我是{{name}}，年龄{{age}}，性别{{sex}}'

// const data = {
// 	name: '姓名',
// 	age: 18
// }

// function renderTemplate(template, data) {
// 	let reg = /\{\{(\w+)\}\}/
// 	// console.log(reg.exec(template))
// 	// 一次只能修改一个
// 	if (reg.test(template)) {
// 		const param = reg.exec(template)[1]
// 		template = template.replace(reg, data[param])
// 		return renderTemplate(template, data)
// 	}
// 	return template
// }

// console.log(renderTemplate(template, data))

// 自增函数
var getId = (function() {
	let i = 1
	return function() {
		return i++
	}
})()

console.log(getId())
console.log(getId())
console.log(getId())

// 手写bind

Function.prototype.myBind = (ctx, ...args) => {
	let that = this
	return function(...innerArgs) {
		that.call(ctx, args.concat(innerArgs))
	}
}

// 手写 call

Function.prototype.myCall = (ctx, ...args) => {
	const fn = Symbol('fn')
	let context = ctx || Window
	context[fn] = this
	let ret = context[fn](...args)
	delete context[fn]
	return ret
}

// function testLet

console.log(a)
function testLet() {
	let a = 3
}
