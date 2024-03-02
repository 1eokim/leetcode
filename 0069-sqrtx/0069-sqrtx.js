/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x >= 4 ? x / 2 : x;
    let approxRoot = 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (mid * mid === x) {
            return approxRoot = mid;
        } else if (mid * mid < x) {
            approxRoot = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return approxRoot;
};