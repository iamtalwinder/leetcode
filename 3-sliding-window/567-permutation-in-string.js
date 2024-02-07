/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1FreqMap = generateStringMap(s1);
  const subMap = new Map();

  let start = 0;

  for (let end = 0; end < s2.length; end++) {
    const endChar = s2[end];
    if (s1FreqMap.has(endChar)) {
      subMap.set(endChar, (subMap.get(endChar) || 0) + 1);

      while (subMap.get(endChar) > s1FreqMap.get(endChar)) {
        const startChar = s2[start];
        updateMap(subMap, startChar, -1);
        start++;
      }
    } else {
      while (start <= end) {
        const startChar = s2[start];
        updateMap(subMap, startChar, -1);
        start++;
      }
    }

    if (end - start + 1 === s1.length) {
      return true;
    }
  }

  return false;
};

var updateMap = function (map, key, delta) {
  if (map.has(key)) {
    map.set(key, map.get(key) + delta);
    if (map.get(key) === 0) {
      map.delete(key)
    }
  }
}

var generateStringMap = function (s1) {
  const map = new Map();

  for (let i = 0; i < s1.length; i++) {
    const freq = map.get(s1[i]) || 0;
    map.set(s1[i], freq + 1);
  }

  return map;
}