export default (str) => {
  let r = []
  // 因为本题要求的是相同数量的0/1所以根本不可能到达字符串的最末尾，所以界限直接是倒数第二位
  let len = str.length - 1;

  // str为传入的任何子串
  let match = (str) => {
    // 匹配任意个0或者1，且紧跟的字符串必须是同等数量的取反
    let j = str.match(/^(0+|1+)/)[0]
    // ^1 表示取反 j[0]表示j字符串的第一位，因为前面都是连续一样的，所以只需要知道第一位就行了
    // repeat表示把一个字符串重复多少次
    let o = (j[0] ^ 1).toString().repeat(j.length)
    // 现在要做的就是要去匹配满足j + o 的字符串
    let reg = new RegExp(`^${j}${o}`)
    if (reg.test(str)) {
      return RegExp.$1
    }

  }

  for (let i = 0; i < len; i++) {
    // 表示从第i位开始截取到最末尾
    // match为自己编写的寻找子串的方法
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}



