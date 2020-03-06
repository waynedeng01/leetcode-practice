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
// let walk = (left, right) => {
// 	// 一般树的边界条件都是到最后一层叶子节点，没有再向下的子节点的时候
// 	if (!left && !right) return true
// 	if (left.val >= right.val) return false
// 	// 遍历所有子节点
// }

// // 这种解法并没有考虑到爷孙节点
// var isValidBST = function(root) {
// 	if (!root) {
// 		return true
// 	}
// 	// 因为二叉搜索树和根节点是有关联的，所以不用将递归过程分离
// 	if (!root.left && !root.right) return true
// 	if ((root.left && root.left.val >= root.val) || (root.right && root.right.val <= root.val)) {
// 		return false
// 	}
// 	// 左右子树都要满足
// 	return isValidBST(root.left) && isValidBST(root.right)
// }

let walk = (node, min = -Infinity, max = +Infinity) => {
	if (!node) return true
	let val = node.val
	if (val <= min || val >= max) {
		return false
	}
	return walk(node.left, min, val) && walk(node.right, val, max)
}

var isValidBST = function(root) {
	return walk(root)
}
