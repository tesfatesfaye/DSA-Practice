const pivotFunction = (nums, left = 0, right = nums.length - 1) => {
  const swapper = (nums, left, right) =>
    ([nums[left], nums[right]] = [nums[right], nums[left]]);
  let pivotIndex = Math.floor(Math.random() * (right - left) + left);
  swapper(nums, pivotIndex, right);

  let l = left;

  while (left <= right) {
    if (nums[left] > nums[right]) {
      swapper(nums, left, l);
      l++;
    }
    left++;
  }
  swapper(nums, l, right); 
  return l;
};

const kthLargest = (nums, k, left = 0, right = nums.length - 1) => {
  if (right == k - 1 || left < 0) return nums.slice(0, k);
  const pivot = pivotFunction(nums, left, right);
  if (k - 1 === pivot) return nums.slice(0, k);
  if (pivot > k - 1) {
    return kthLargest(nums, k, 0, pivot - 1);
  } else {
    return kthLargest(nums, k, pivot + 1, right);
  }
};

const array = [3, 1, 19, 27, 2, 17];
console.log(kthLargest(array, 3));
