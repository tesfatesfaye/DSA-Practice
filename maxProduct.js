const maxProductBrute =  (nums)=> {
  let maxProduct = -Infinity;
  let tempProduct = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    tempProduct = nums[i];
    maxProduct = Math.max(tempProduct, maxProduct);
    for (let j = i + 1; j < nums.length; j++) {
      tempProduct = tempProduct * nums[j];
      maxProduct = Math.max(tempProduct, maxProduct);
    }
  }
  return maxProduct;
};
