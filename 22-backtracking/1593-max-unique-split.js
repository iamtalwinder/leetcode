/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
  let maxCount = 0;

  const uniqueString = new Set();

  function backtrack(index, count) {
      if (index === s.length) {
          maxCount = Math.max(maxCount, count);
      }

      for (let i = index; i < s.length; i++) {
          const substring = s.substring(index, i + 1);
          if (!uniqueString.has(substring)) {
              uniqueString.add(substring);
              backtrack(i + 1, count + 1);
              uniqueString.delete(substring);
          }
      }
  }

  backtrack(0, 0);
  return maxCount;
};