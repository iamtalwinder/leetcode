/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function (s) {
  const leftMap = new FreqMap(), rightMap = new FreqMap();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    rightMap.add(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    leftMap.add(char)
    rightMap.remove(char);

    if (leftMap.size() === rightMap.size()) {
      count++;
    }
  }

  return count;
};

class FreqMap {
  map = new Map();

  get(char) {
    return this.map.get(char) || 0;
  }

  add(char) {
    this.map.set(char, this.get(char) + 1);
  }

  remove(char) {
    const freq = this.get(char) - 1;

    if (freq <= 0) {
      this.map.delete(char);
      return;
    }

    this.map.set(char, freq);
  }

  size() {
    return this.map.size;
  }

}
