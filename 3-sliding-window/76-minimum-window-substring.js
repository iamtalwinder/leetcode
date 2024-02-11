/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tFreqMap = generateStringFreqMap(t);
  const windowFreq = new Map();

  let start = 0, end = 0, minLength = Number.POSITIVE_INFINITY;
  let windowDiffChar = 0, minStart = 0, minEnd = 0;

  while (end < s.length) {
    const endChar = s[end];
    const charFreq = (windowFreq.get(endChar) || 0) + 1;
    windowFreq.set(endChar, charFreq);

    if (tFreqMap.has(endChar) && charFreq <= tFreqMap.get(endChar)) {
      windowDiffChar++;
    }

    while (windowDiffChar === t.length) {
      if (end - start + 1 < minLength) {
        minLength = end - start + 1;
        minStart = start;
        minEnd = end + 1;
      }

      const startChar = s[start];
      if (windowFreq.has(startChar)) {
        const startFreq = windowFreq.get(startChar) - 1;
        windowFreq.set(startChar, startFreq);
        if (startFreq < tFreqMap.get(startChar)) {
          windowDiffChar--;
        }
      }
      start++;
    }

    end++;
  }

  return s.substring(minStart, minEnd);
};

var generateStringFreqMap = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }

  return map;
}