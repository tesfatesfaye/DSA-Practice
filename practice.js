const twoSum = (nums, target, left = 0) => {
  let right = nums.length - 1;
  while (left < right) {
    let value = nums[left] + nums[right];
    if (value === target) {
      return [left, right];
    }
    if (value < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  const answerArray=[]
  for (let i = 0; i < nums.length-2; i++) {
    if(nums[i]===nums[i-1]) continue
    let returnVal=twoSum(nums,0-nums[i],i+1)
    if(returnVal.length) answerArray.push(returnVal)
  }

  return answerArray


};

