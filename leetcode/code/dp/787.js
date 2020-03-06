/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
	// src 起点 dst 终点 不能超过 k 次中转
	// flights 表示的是飞行路径 item[0] 起点 item[1] item[2] 价格
	let dp = (src, dst, K) => {
		// 求出终点的上一个节点
		let prev = flights.filter((item) => item[1] === dst)
		// 边界
		let min = Math.floor.apply(
			null,
			prev.map((item) => {
				// 到达起点 并且 没有超过 k 次中转
				if (item[0] === src && K > -1) {
					return item[2]
				} else if (K === 0 && item[0] !== src) {
					// 不满足的条件直接返回最大值通过Math.min就排除掉了
					return Number.MAX_SAFE_INTEGER
				} else {
					// 返回的就是最小值
					return dp(src, item[0], K - 1) + item[2]
				}
			})
		)
		return min
	}
	return dp(src, dst, K)
}

edges = [ [ 0, 1, 100 ], [ 1, 2, 100 ], [ 0, 2, 500 ] ]
