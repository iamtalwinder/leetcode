/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let start = 0, maxLength = 0, maxCharFreq = 0;
  const freqMap = new Map();
  
  for (let end = 0; end < s.length; end++) {
    freqMap.set(s[end], (freqMap.get(s[end]) || 0) + 1);
    maxCharFreq = Math.max(maxCharFreq, freqMap.get(s[end]));

    const charToChange = (end - start + 1) - maxCharFreq;

    if (charToChange > k) {
      freqMap.set(s[start], (freqMap.get(s[start]) || 0) - 1);
      start++;
    }

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}