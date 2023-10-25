const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const answerArray = [];
  const twoSum = (nums, tar, left = 0) => {
    let right = nums.length - 1;
    let target = 0 - tar;
    let leftTracker;
    let rightTracker;
    while (left < right) {
      let value = nums[left] + nums[right];
      if (value === target) {
        if (leftTracker !== nums[left] && rightTracker !== nums[right]) {
          answerArray.push([tar, nums[left], nums[right]]);
          leftTracker = nums[left];
          rightTracker = nums[right];
        }
        left++;
        right--;
      } else if (value < target) {
        left++;
      } else {
        right--;
      }
    }
  };

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    twoSum(nums, nums[i], i + 1);
  }

  return answerArray;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -1, -1, 1, 0]));
