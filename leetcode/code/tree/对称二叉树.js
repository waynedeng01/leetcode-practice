/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 作用是判断传入的两个节点是否对称
let walk = (left, right) => {
	if (!left && !right) {
		return true
	}
	// 排除两种不对称的情况
	if ((left && !right) || (right && !left)) return false
	if (left.val !== right.val) return false
	return walk(left.left, right.right) && walk(left.right, right.left)
}

let pretraverse = (node) => {
	if (node) {
		console.log(node.val)
		pretraverse(node.left)
		pretraverse(node.right)
	}
}

var isSymmetric = function(root) {
	if (!root) return true
	// 尝试遍历
	if (root) {
		pretraverse(root)
	}
	return walk(root.left, root.right)
}
