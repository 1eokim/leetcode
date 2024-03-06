/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        const seenChars = new Set(); // 반복문 돌때마다 새롭게 선언해야 해서
        let currentLength = 0; // 마찬가지
        console.log('seenChars', seenChars);

        for (let j = i; j < s.length; j++) {
            if (!seenChars.has(s[j])) {
                seenChars.add(s[j]);
                currentLength++;
                maxLength = Math.max(maxLength, currentLength);
            } else {
                break;
            }
        }
    }

    return maxLength;
};