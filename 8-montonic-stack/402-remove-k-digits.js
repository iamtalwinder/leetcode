/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const stack = [];

  for (let i = 0; i < num.length; i++) {
    const char = num[i];

    while (k && stack.length && char < top(stack)) {
      stack.pop();
      k--;
    }

    if (!stack.length && char === '0') {
      continue;
    }

    stack.push(char);
  }

  while (k) {
    stack.pop();
    k--;
  }

  return stack.join('') ? stack.join('') : '0';
};

var top = function (stack) {
  return stack[stack.length - 1];
}