var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
  if (nums.length < indexDiff) return false;

  let holder = {};
  const checker = (i, ind, val) => {
    let counter = 1;
    while (counter <= i && counter <= ind) {
      if (Math.abs(holder[i - counter] - holder[i]) <= val) {
        return true;
      }
      counter++;
    }
    return false;
  };
  let length = 0;
  for (let i in nums) {
    holder[i] = nums[i];
    length = Object.keys(holder).length;
    if (length > 1) {
      // if((holder[nums[i]!==holder[nums[i-indexDiff]]])){
      console.log(
        Math.abs(holder[nums[i]] - holder[nums[i - indexDiff]]) <= valueDiff
      );
      if (checker(i, indexDiff, valueDiff)) {
        return true;
        // }
      }
    }
    if (i >= indexDiff) {
      delete holder[i - indexDiff];
    }
  }
  return false;
};
