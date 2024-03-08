/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let boundaryIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            boundaryIndex = i;
            break;
        }
    }

    let result = [];

    if (boundaryIndex !== -1) {
        const positiveNums = nums.slice(boundaryIndex);
        const negativeNums = nums.slice(0, boundaryIndex);

        console.log(positiveNums);
        console.log(negativeNums);

        let positiveNumsPointer = 0;
        let negativeNumsPointer = negativeNums.length - 1;

        while (negativeNumsPointer >= 0 && positiveNumsPointer < positiveNums.length) {
            if (positiveNums[positiveNumsPointer] >= Math.abs(negativeNums[negativeNumsPointer])) {
                result.push(negativeNums[negativeNumsPointer] ** 2);
                negativeNumsPointer--;
            } else {
                result.push(positiveNums[positiveNumsPointer] ** 2);
                positiveNumsPointer++;
            }
        }

        while (positiveNumsPointer < positiveNums.length) {
            result.push(positiveNums[positiveNumsPointer] ** 2);
            positiveNumsPointer++;
        }

        while (negativeNumsPointer >= 0) {
            result.push(negativeNums[negativeNumsPointer] ** 2);
            negativeNumsPointer--;
        }
    } else {
        for (let i = nums.length - 1; i >= 0; i--) {
            result.push(nums[i] ** 2);
        }
    }

    return result;
};