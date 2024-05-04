/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0, r = s.length - 1;

  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
      continue;
    }

    if (s[l] !== s[r]) {
      return isPalindromeRange(s, l + 1, r) || isPalindromeRange(s, l, r - 1);
    }
  }

  return true;
};

var isPalindromeRange = function (s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}

