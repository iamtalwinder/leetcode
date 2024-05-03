/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineMap = new Map();

  for (let i = 0; i < magazine.length; i++) {
    const count = magazineMap.get(magazine[i]) || 0;
    magazineMap.set(magazine[i], count + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazineMap.has(ransomNote[i])) {
      const count = magazineMap.get(ransomNote[i]) - 1;

      if (count === 0) {
        magazineMap.delete(ransomNote[i]);
      } else {
        magazineMap.set(magazine[i], count);
      }
    } else {
      return false;
    }
  }

  return true;
};