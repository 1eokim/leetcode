/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = [];

    let i = nums.length - 1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
            result[i] = nums[left] ** 2;
            left++;
            i--;
        } else {
            result[i] = nums[right] ** 2;
            right--;
            i--;
        }
    }

    return result;
};
