/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  let sIndex = s.length - 1, tIndex = t.length - 1;

  while (sIndex >= 0 || tIndex >= 0) {
      sIndex = updateIndex(s, sIndex);
      tIndex = updateIndex(t, tIndex);

      if (sIndex < 0 && tIndex < 0) {
          return true;
      }

      if (sIndex < 0 || tIndex < 0 || s[sIndex] !== t[tIndex]) {
          return false;
      }

      sIndex--;
      tIndex--;
  }

  return true;
};

var updateIndex = function(string, index) {
  let backspace = 0;

  while (index >= 0 && (string[index] === '#' || backspace > 0)) {
      if (string[index] === '#') {
          backspace++;
      } else {
          backspace--;
      }
      index--;
  }

  return index;
}
