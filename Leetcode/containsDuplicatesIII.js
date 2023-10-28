var containsNearbyAlmostDuplicateBruteForce = function (nums, indexDiff, valueDiff) {
  for (let i = 0; i < nums.length; i++) {
    let l = i - indexDiff;
    let r = indexDiff + i;
    if (l < 0) l = 0;
    if (r >= nums.length) r = nums.length - 1;
    while (l < i || r > i) {
      if (i < l && Math.abs(nums[i] - nums[l]) <= valueDiff) return true;
      if (r > i && Math.abs(nums[i] - nums[r]) <= valueDiff) return true;
      if (l !== i) l++;
      if (r !== i) r--;
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicateBruteForce([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicateBruteForce([1, 5, 9, 1, 5, 9], 2, 3));
