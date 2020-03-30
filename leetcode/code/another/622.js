/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
	this.list = Array(k)
	// 队首，队尾指针
	this.front = 0
	this.rear = 0
	this.max = k
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
	if (this.isFull()) {
		return false
	} else {
		this.list[this.rear] = value
		this.rear = (this.rear + 1) % this.max
		return true
	}
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
	if (this.isEmpty()) {
		return false
	} else {
		this.front = (this.front + 1) % this.max
		return true
	}
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
	return this.list[this.front]
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
	// 注意rear和rear指向的值相差一
	let rear = this.rear - 1
	return this.list[rear < 0 ? this.max - 1 : rear]
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
	return this.front === this.rear && !this.list[this.front]
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
	return this.front === this.rear && this.list[this.front]
}
