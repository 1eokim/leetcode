/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;
    let longest = 0;
    const seenChars = new Set();

    for (; end < s.length;) {
        const currentChar = s[end];

        if (!seenChars.has(currentChar)) {
            seenChars.add(currentChar);
            longest = Math.max(longest, end - start + 1);
            end++;
        } else {
            seenChars.delete(s[start]);
            start++;
        }
    }

    return longest;
};
