const missingNumber =  (nums)=> {
  let sum = nums.reduce((x, y) => x + y);
  let n = nums.length+1;
  n = (n * (n + 1)) / 2;
  return n - sum || nums.length+1;
};
