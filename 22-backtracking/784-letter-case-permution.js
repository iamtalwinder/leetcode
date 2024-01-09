/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const result = [];

  function backtrack(path, index) {
      if (index === s.length) {
          result.push(path);
          return;
      }

      if (isNaN(s[index])) {
          backtrack(path + s[index].toUpperCase(), index + 1);
          backtrack(path + s[index].toLowerCase(), index + 1);
      } else {
          backtrack(path + s[index], index + 1);
      }

  }

  backtrack('', 0);
  return result;
};

/*
Time complexity: 2^k, k is the number of char > O(2^k)
Space complexity: n for the length of stack 2^k for the results > O(2^k)
*/