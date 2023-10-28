var fourSum = function (nums, target) {
  let res = [],
    quad = [];
  nums.sort((a, b) => a - b);
  const kSum = (k, start, target) => {
    if (k !== 2) {
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i > start && nums[i] === nums[i - 1]) continue;
        quad.push(nums[i]);
        kSum(k - 1, i + 1, target - nums[i]);
        quad.pop();
      }
    } else {
      let l = start,
        r = nums.length - 1;
      while (l < r) {
        let sum = nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          res.push([...quad, nums[l], nums[r]]);
          l++;
          while (nums[l] === nums[l - 1]) l++;
          while (nums[r] === nums[r + 1]) r--;
        }
      }
    }
  };
  kSum(4, 0, target);
  return res;
};
