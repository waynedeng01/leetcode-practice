/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 反转链表 链表一般都只给出头指针
var reverseList = function(head) {
	let pre = null
	let cur = head
	// 遍历
	while (cur !== null) {
		let tmp = cur.next
		// 箭头反指
		cur.next = pre
		// 移动指针
		pre = cur
		cur = tmp
	}
	// 返回反转后的头结点
	return pre
}
