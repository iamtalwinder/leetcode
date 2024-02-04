/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {    
  let maxLength = 0, start = 0;
  let windowChar = new Map();

  for (let end = 0; end < s.length; end++) {
      if (windowChar.has(s[end])) {
          maxLength = Math.max(maxLength, end - start);
          newStart = windowChar.get(s[end]) + 1;

          while (start < newStart) {
              windowChar.delete(s[start]);
              start++;
          }
      } else if (end === s.length - 1) {
          maxLength = Math.max(maxLength, end - start + 1);
      }

      windowChar.set(s[end], end);
  }

  return maxLength;
};
