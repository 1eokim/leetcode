/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const pairNum = target - num;
        const pairNumIndex = nums.indexOf(pairNum, i + 1);

        if (pairNumIndex !== -1) {
            return [i, pairNumIndex];
        }
    }
};