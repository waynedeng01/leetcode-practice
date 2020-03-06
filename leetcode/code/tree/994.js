/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
	// 变量初始化
	let minute = 0
	let newFresh = 0
	// 记录腐烂橘子位置的队列 用于 BFS
	// 第一步先入队
	let q = []
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 2) {
				q.push([ i, j ])
			}
			if (grid[i][j] === 1) {
				newFresh++
			}
		}
	}
	while (q.length && newFresh) {
		let newQ = []
		while (q.length) {
			let bad = q.shift()
			const count = infectOthers(grid, bad[0], bad[1], newQ)
			newFresh -= count
		}
		minute++
		q = newQ
	}
	if (newFresh !== 0) {
		return -1
	}
	return minute
}

// 定义感染函数，作用是将腐烂橘子周围的好橘子感染，新感染橘子的数量
var infectOthers = (grid, i, j, q) => {
	let num = 0
	if (i > 0 && grid[i - 1][j] === 1) {
		grid[i - 1][j] = 2
		num++
		// 将新腐烂的橘子入队
		q.push([ i - 1, j ])
	}
	if (j > 0 && grid[i][j - 1] === 1) {
		grid[i][j - 1]++
		num++
		q.push([ i, j - 1 ])
	}
	if (i < grid.length - 1 && grid[i + 1][j] === 1) {
		grid[i + 1][j]++
		num++
		q.push([ i + 1, j ])
	}
	if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
		grid[i][j + 1]++
		num++
		q.push([ i, j + 1 ])
	}
	return num
}
