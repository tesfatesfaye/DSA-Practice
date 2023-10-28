var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  let map = new Map();
  let bucketSize = valueDiff + 1;
  for (let i = 0; i < nums.length; i++) {
    const mapKey = Math.floor(nums[i] / bucketSize);
    if (map.has(mapKey)) return true;
    if (map.has(mapKey - 1) && nums[i] - map.get(mapKey - 1) < bucketSize)
      return true;
    if (map.has(mapKey + 1) && map.get(mapKey + 1) - nums[i] < bucketSize)
      return true;
    map.set(mapKey, nums[i]);

    if (i >= indexDiff) {
      const oldMapKey = Math.floor(nums[i - indexDiff] / bucketSize);
      map.delete(oldMapKey);
    }
  }

  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));

var containsNearbyAlmostDuplicateBruteForce = function (
  nums,
  indexDiff,
  valueDiff
) {
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
