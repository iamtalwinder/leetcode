/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0, start = 0, end = 0;

  const currentWindow = new Map();

  while (start <= end && end < s.length) {
    if (currentWindow.has(s[end])) {
      const newStartIndex = currentWindow.get(s[end]) + 1;

      while (start !== newStartIndex) {
        currentWindow.delete(s[start]);
        start++;
      }
    }

    maxLength = Math.max(maxLength, end - start + 1);

    currentWindow.set(s[end], end);
    end++;
  }

  return maxLength;
};
