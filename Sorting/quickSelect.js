const swap = (arr, one, two) => {
  [arr[one], arr[two]] = [arr[two], arr[one]];
};

const pivot = (arr, left = 0, right = arr.length - 1) => {
  let start = left;

  while (left < right) {
    if (arr[left] < arr[right]) {
      swap(arr, left, start);
      start++;
    }
    left++;
  }
  swap(arr, start, right);
  return start;
};

const quickSelect = (arr, k, left = 0, right = arr.length - 1) => { // for kth largest element
  let kval = arr.length - k;
  if (left === right) return arr[left];

  let piv = pivot(arr, left, right);

  if (piv === kval) {
    return arr[piv];
  } else if (kval < piv) {
    return quickSelect(arr, k, left, piv - 1);
  } else {
    return quickSelect(arr, k, piv + 1, right);
  }
};

const array = [
  13, 5, 28, 8, 4, 30, 10, 25, 17, 2, 12, 9, 19, 1, 23, 16, 29, 20, 21, 6, 3, 7,
  27, 24, 26, 11, 14, 15, 18, 22,
];

console.log(quickSelect(array, 2));
console.log(array);
