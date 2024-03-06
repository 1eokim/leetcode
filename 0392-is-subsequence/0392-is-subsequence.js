/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let subIndex = 0;
    let mainIndex = 0;
    let matchCount = 0;

    while (subIndex < s.length && mainIndex < t.length) {
        if (s[subIndex] === t[mainIndex]) {
            subIndex++;
            mainIndex++;
            matchCount++;
        } else {
            mainIndex++;
        }
    }

    if (matchCount === s.length) {
        return true;
    } else {
        return false;
    }
};