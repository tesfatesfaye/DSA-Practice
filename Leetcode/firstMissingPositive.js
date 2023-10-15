const firstMissingPositive = (nums) => {
  let counter = 0;
  let value = nums[counter];

  while (counter < nums.length) {
    if (nums[value - 1] === undefined || nums[value - 1] === value) {
      counter++;
      value = nums[counter];
    } else {
      [nums[value - 1], value] = [value, nums[value - 1]];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i + 1) {
      continue;
    }
    return i + 1;
  }

  return nums.length + 1;
};

console.log(firstMissingPositive([7, 8, 9, 11, 12]));
