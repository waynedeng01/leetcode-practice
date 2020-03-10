/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//  求二叉树的直径问题我们将其转换为求路径通过的最大节点数-1
var diameterOfBinaryTree = function(root) {
	let result = 0
	deep(root)
	return result

	function deep(root) {
		if (!root) return -1
		let left = root.left ? deep(root.left) + 1 : 0
		let right = root.right ? deep(root.right) + 1 : 0

		result = Math.max(left + right, result)
		return Math.max(left, right)
	}
}
