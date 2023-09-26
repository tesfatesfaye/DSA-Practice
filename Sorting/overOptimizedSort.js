const swapper = (arr, indexOne, indexTwo) => {
  [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];
};
const sorter = (left, right, arr) => {
  let middle = Math.floor((left + right) / 2);
  if (arr[right] < arr[middle]) swapper(arr, right, middle);
  let start;
  let end = left;
  let equalValues = 0;
  while (left < right) {
    if (arr[left] <= arr[right]) {
      swapper(arr, end, left);
      end++;
      if (arr[left] === arr[right]) equalValues++;
    }
    left++;
  }
  start = end - equalValues;
  swapper(arr, end, right);
  return [start, end];
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (right <= left || left >= right) return arr ?? [];
  const [begin, finish] = sorter(left, right, arr);
  quickSort(arr, left, finish - 1);
  quickSort(arr, begin + 1, right);
  return arr;
};
const arr = [4, 8, 1, 5, 3, 5, 2, 0, 12, 9, 5, 3];
console.log(quickSort(arr));
