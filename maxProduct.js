const maxProductBrute = (nums) => {
  let maxProduct = tempProduct = -Infinity;
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

const maxProductSubarray = (nums) => {
  let max = min = res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) [max, min] = [min, max];
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);
    res = Math.max(res, max);
  }

  return res;
};

const maxPro=(nums)=>{
    let max =min = res = nums[0];
    for(let i= 1; i<nums.length;i++){
      let temp=max
      max=Math.max(nums[i],max*nums[i],min*nums[i])
      min=Math.min(nums[i], min*nums[i],temp*nums[i])
      res=Math.max(res,max)

    }
    return res
}


const arr=[2,3,5,1,5]
const arrTwo=[5,-2,-6,-11,3]
// console.log(maxProductSubarray(arr))
console.log(maxProductSubarray(arrTwo));
console.log(maxPro(arrTwo));