/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
	if (nums.length < 2) {
		return 0
	} else {
		let arr = nums.sort((a, b) => a - b)
		let max = arr[1] - arr[0]
		for (let i = 2; i < arr.length; i++) {
			let delta = arr[i] - arr[i - 1]
			if (delta > max) {
				max = delta
			}
		}
		return max
	}
}
