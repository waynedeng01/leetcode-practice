/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
	let List = []
	let ret = []
	if (root === null) return []
	if (root !== null) {
		List.push(root)
		while (List.length !== 0) {
			// 广度优先遍历
			let v = List.shift()
			ret.push(v.val)
			if (v.left) {
				// levelOrder(v.left)
				List.push(v.left)
			}
			if (v.right) {
				// levelOrder(v.right)
				List.push(v.right)
			}
		}
	}
	return ret
}
