/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  const peek = getMountainPeek(mountainArr);
  const left = getLeft(target, peek, mountainArr);

  if (left !== -1) {
    return left
  };

  return getRight(target, peek, mountainArr);
};

var getLeft = function (target, peek, mountainArr) {
  let left = 0, right = peek;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = mountainArr.get(midIndex);

    if (midValue === target) {
      return midIndex;
    }

    if (midValue < target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }

  return -1;
}

var getRight = function (target, peek, mountainArr) {
  let left = peek + 1, right = mountainArr.length() - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    const midValue = mountainArr.get(midIndex);

    if (midValue === target) {
      return midIndex;
    }

    if (midValue > target) {
      left = midIndex + 1;
    } else {
      right = midIndex - 1;
    }
  }

  return -1;
}

var getMountainPeek = function (mountainArr) {
  let left = 0, right = mountainArr.length() - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = mountainArr.get(mid);
    const midNextValue = mountainArr.get(mid + 1);

    if (midValue < midNextValue) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};