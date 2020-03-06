// export default function reverWords(str) {
//   let strCut = str.split(' ')
//   let ret = strCut.map(item => item.split('').reverse().join(''))
//   return ret.join(' ')
// }

//option 2

export default (str) => {

  return str.split(' ').map(item => item.split('').reverse().join('')).join(' ')

}
