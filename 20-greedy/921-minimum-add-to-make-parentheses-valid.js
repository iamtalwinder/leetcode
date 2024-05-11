// Stack

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] !== '(' && s[i] !== ')') {
          continue;
      }

      if (stack.length && s[i] === ')' && stack[stack.length - 1] === '(') {
          stack.pop();
          continue;
      }

      stack.push(s[i]);
  }

  return stack.length;
};

// Counter

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
  let open = 0, close = 0;

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          open++;
      }

      if (s[i] === ')') {
          if (open > 0) {
              open--;
          } else {
              close++;
          }
      }
  }

  return open + close;
};

