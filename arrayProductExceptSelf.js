var productExceptSelf = function (nums) {
  if (nums.length === 1) {
    nums[0] = 0;
    return nums;
  }
  let zeroIndex = undefined;
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (zeroIndex === undefined) {
        zeroIndex = i;
      } else {
        zeroIndex = -1;
        break;
      }
    } else {
      product *= nums[i];
    }
  }
  if (zeroIndex === -1) {
    nums.map((x, i) => (nums[i] = 0));
    return nums;
  }

  for (let i = 0; i < nums.length; i++) {
    if (zeroIndex >= 0 && i !== zeroIndex) {
      nums[i] = 0;
    } else {
      nums[i] = product / (nums[i] || 1);
    }
  }
  return nums;
};

let array = [2, 3, 0, 4];
console.log(productExceptSelf(array));
