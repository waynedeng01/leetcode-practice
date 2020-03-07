var MaxQueue = function() {
	this.queue = []
	// this.res = [ null ]
	// return res
}

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
	if (this.queue.length === 0) {
		// this.res.push(-1)
		return -1
	}
	let max = Math.max(...this.queue)
	// this.res.push(max)
	return max
}

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
	// 没有返回值入队null
	this.queue.push(value)
	// this.res.push(null)
	return null
}

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
	if (this.queue.length === 0) {
		// this.res.push(-1)
		return -1
	}
	let pop = this.queue.shift()
	// this.res.push(pop)
	return pop
}

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
