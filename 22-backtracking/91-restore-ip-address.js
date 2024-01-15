/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const result = [];

  function backtrack(path, start) {
      if (start === s.length && path.length === 4) {
          result.push(path.join('.'));
          return;
      }

      if (start === s.length || path.length === 4) {
          return;
      }

      for (let i = start; i < s.length; i++) {
          const substring = s.substring(start, i + 1);

          if (isValid(substring)) {
              path.push(substring);
              backtrack(path, i + 1);
              path.pop();
          }
      }
  }

  function isValid(part) {
      if (part.length > 1 && part.startsWith('0')) {
          return false;
      }

      return parseInt(part) >= 0 && parseInt(part) <= 255;
  }

  backtrack([], 0);

  return result;  
};