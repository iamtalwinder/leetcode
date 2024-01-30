/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
  function nextIndex(currentIndex) {
      return (currentIndex + nums[currentIndex] + nums.length) % nums.length;
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          continue;
      }

      let slow = i,
          fast = nextIndex(i);

      while (nums[slow] * nums[fast] > 0 && nums[slow] * nums[nextIndex(fast)] > 0) {
          if (slow === fast) {
              console.log(slow, fast)
              if (slow === nextIndex(slow)) {
                  break; 
              }
              return true;
          }

          slow = nextIndex(slow);
          fast = nextIndex(nextIndex(fast));
      }

      let j = i;
      while (nums[j] * nums[nextIndex(j)] > 0) {
          nums[j] = 0;
          j = nextIndex(j);
      }
  }

  return false;
};
