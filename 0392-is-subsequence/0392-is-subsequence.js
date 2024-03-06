/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let subIndex = 0;
    let mainIndex = 0;

    while (subIndex < s.length && mainIndex < t.length) {
        if (s[subIndex] === t[mainIndex]) {
            subIndex++;
        }

        mainIndex++;
    }

    return subIndex === s.length;
};