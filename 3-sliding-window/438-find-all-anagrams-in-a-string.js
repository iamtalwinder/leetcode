/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pFreqMap = generateFreqMap(p);
  const windowFreqMap = new Map(), result = [];
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const endChar = s[end];

    if (pFreqMap.has(endChar)) {
      const freq = windowFreqMap.get(endChar) || 0;
      windowFreqMap.set(endChar, freq + 1);

      while (windowFreqMap.get(endChar) > pFreqMap.get(endChar)) {
        const startChar = s[start];
        updateMap(windowFreqMap, startChar, - 1);
        start++
      }
    } else {
      while (start < end) {
        const startChar = s[start];
        updateMap(windowFreqMap, startChar, - 1);
        start++
      }
    }

    if (start === end && !pFreqMap.has(s[start])) {
      start++;
    }

    if (end - start + 1 === p.length) {
      result.push(start);
      const startChar = s[start];
      updateMap(windowFreqMap, startChar, - 1);
      start++

    }
  }

  return result;
};

var updateMap = (map, key, delta) => {
  if (!map.has(key)) {
    return;
  }

  map.set(key, map.get(key) + delta);

  if (map.get(key) === 0) {
    map.delete(key);
  }
}

var generateFreqMap = (p) => {
  const map = new Map();

  for (let i = 0; i < p.length; i++) {
    map.set(p[i], (map.get(p[i]) || 0) + 1);
  }

  return map;
}