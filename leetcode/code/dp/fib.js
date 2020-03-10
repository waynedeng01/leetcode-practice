// 本题思路很简单，记录下来主要是处理大整数溢出问题
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) {
        return 0
    }
    if (n === 1 || n === 2) {
        return 1
    }
    let res
    // 防止溢出
    // 使用bigInt类型
    let a = 1n
    let b = 1n
    for (let i = 3; i <= n; i++) {
        res = a + b
        b = a
        a = res
    }
    return res % 1000000007n
};