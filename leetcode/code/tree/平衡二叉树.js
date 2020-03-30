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
var isBalanced = function(root) {
	// 方法一：定义一个获取tree深度的函数
	if (root === null) return true
	return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}

// return 当前节点树的深度
// 树的深度是左，右子树最大深度加一
let depth = (root) => {
	if (root === null) return 0
	return Math.max(depth(root.left), depth(root.right)) + 1
}

isBalanced([ 3, 9, 20, null, null, 15, 7 ])
