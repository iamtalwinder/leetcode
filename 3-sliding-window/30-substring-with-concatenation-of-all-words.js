/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordsMap = generateArrayFreqMap(words);
  const wordLength = words[0].length;
  const totalLength = words[0].length * words.length;

  const result = [];

  for (let end = 0; end <= s.length - totalLength; end++) {
    const windowFreq = new Map();
    let start = end;

    while (start < end + totalLength) {
      const subString = s.substring(start, start + wordLength);

      if (wordsMap.has(subString)) {
        const freq = windowFreq.get(subString) || 0;
        windowFreq.set(subString, freq + 1);

        if (windowFreq.get(subString) > wordsMap.get(subString)) {
          break;
        }

        start += wordLength;
      } else {
        break;
      }
    }

    if (start === end + totalLength) {
      result.push(end);
    }

  }

  return result;
};

var generateArrayFreqMap = (arr) => {
  const map = new Map();

  arr.forEach((key) => {
    map.set(key, (map.get(key) || 0) + 1);
  });

  return map;
}