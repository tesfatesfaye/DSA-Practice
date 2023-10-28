var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  let map = new Map();
  let bucketSize=valueDiff+1
  for (let i = 0; i < nums.length; i++) {
    const mapKey = Math.floor(nums[i] / bucketSize);
    if (map.has(mapKey)) return true;    
    if (map.has(mapKey - 1) && nums[i]-map.get(mapKey - 1) < bucketSize) return true;
    if (map.has(mapKey + 1) && map.get(mapKey + 1)-nums[i] < bucketSize) return true;
    map.set(mapKey, nums[i]);

    if (i >= indexDiff) {
      const oldMapKey = Math.floor(nums[i - indexDiff] / bucketSize);
      map.delete(oldMapKey);
    }
  }

  return false
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));