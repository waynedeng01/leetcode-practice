// 传入的应该是promise数组
// 作用是其中一个promise执行完就返回

function myRace(promises) {
	return new Promise((resolve, reject) => {
		promises.forEach((item) => {
			item.then(resolve, reject)
		})
	})
}

// promise.all 实现
