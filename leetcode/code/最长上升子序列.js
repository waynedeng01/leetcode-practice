// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var lengthOfLIS = function(nums) {
// 	if (nums.length === 1) {
// 		return 1
// 	}
// 	if (nums.length === 2) {
// 		if (nums[0] < nums[1]) {
// 			return 2
// 		} else if (nums[0] === nums[1]) {
// 			return 1
// 		} else {
// 			return 0
// 		}
// 	}
// 	let ret = []
// 	for (let i = 1; i < nums.length; i++) {
// 		if (nums[i - 1] <= nums[i]) {
// 			if (!ret.length) {
// 				ret.push(nums[i - 1])
// 			} else {
// 				let last = ret.pop()
// 				if (nums[i - 1] >= last) {
// 					ret.push(last, nums[i - 1])
// 				}
// 			}
// 		} else if (i === nums.length - 1 && nums[i - 1] > nums[i]) {
// 			let lastItem = ret.pop()
// 			if (nums[i - 1] >= lastItem) {
// 				ret.push(lastItem, nums[i - 1])
// 			}
// 		} else {
// 			continue
// 		}
// 	}
// 	return ret.length
// }

// lengthOfLIS([ 1, 2, 3 ])
