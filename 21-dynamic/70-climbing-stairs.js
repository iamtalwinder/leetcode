/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 2) {
    return n;
  }

  let last = 1, secondLast = 2;

  for (let i = 3; i <= n; i++) {
    const newSteps = last + secondLast;
    last = secondLast;
    secondLast = newSteps;
  }

  return secondLast;
};


/*
count i = count[i - 1] + count[1 - 2] 
*/