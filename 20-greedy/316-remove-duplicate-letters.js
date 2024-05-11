/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  if (!s.length) {
    return s;
  }

  const lastIndexMap = new Map();
  const seen = new Set();
  const result = [];

  for (let i = 0; i < s.length; i++) {
    lastIndexMap.set(s[i], i);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seen.has(char)) {
      continue;
    }

    while (result.length && char < top(result) && lastIndexMap.get(top(result)) > i) {
      seen.delete(result.pop());
    }

    result.push(char);
    seen.add(char);
  }

  return result.join('');

};

function top(stack) {
  return stack[stack.length - 1];
}