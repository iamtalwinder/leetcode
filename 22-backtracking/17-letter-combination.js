/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) {
    return []
  }

  const phoneMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  const result = [];

  function backtrack(path, index) {
    if (path.length === digits.length) {
      result.push(path);
      return;
    }

    const numberChars = phoneMap[digits[index]];

    numberChars.forEach(char => {
      backtrack(path + char, index + 1);
    });

  }

  backtrack('', 0);
  return result;
};
