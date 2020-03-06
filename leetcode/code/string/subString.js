var lengthOfLongestSubstring = function (s) {
    let map = new Map()
    let start = -1
    //     最终要返回的结果长度
    let ret = 0
    //     获取到每一个字符组成的数组
    let arr = s.split('')
    arr.forEach((item, index) => {
        if (map.has(item)) {
            start = Math.max(map.get(item), start)
        }
        map.set(item, index)
        ret = Math.max(index - start, ret)
    })
    return ret

};