function removeElement(nums: number[], val: number): void {
  let k = 0

  const count = nums.filter(num => num !== val).length;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }


  nums.length = count
};