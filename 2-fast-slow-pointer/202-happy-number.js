/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  function nextGreaterNumber(n) {
      let sum = 0;
      while (n > 0) {
          const digit = n % 10;
          sum += digit * digit;
          n = Math.floor(n / 10);
      }

      return sum;
  }

  let fast = n, slow = n;

  do {
      fast = nextGreaterNumber(nextGreaterNumber(fast));
      slow = nextGreaterNumber(slow);

      if (fast === 1) return true;
  } while (fast !== slow);

  return slow === 1;
};