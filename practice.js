const maxHeap = [];
const parentIndex = (index) => Math.floor((index - 1) / 2);
const swapper = (i, j) => ([maxHeap[i], maxHeap[j]] = [maxHeap[j], maxHeap[i]]);
const childNodes = (index, child = "l") => {
  if (child === "l") {
    let left = index * 2 + 1;
    return maxHeap[left] !== undefined ? left : index;
  } else {
    let right = index * 2 + 2;
    return maxHeap[right] !== undefined ? right : index;
  }
};
const insert = (value) => {
  maxHeap.push(value);
  if (maxHeap.length) {
    let index = maxHeap.length - 1;
    let parent = parentIndex(index);
    while (index) {
      if (value > maxHeap[parent]) {
        swapper(index, parent);
        index = parent;
        parent = parentIndex(index);
      } else {
        break;
      }
    }
  }
  return maxHeap;
};

const removeTop = () => {
  let topValue;
  if (maxHeap.length) {
    let index = 0;
    swapper(0, maxHeap.length - 1);
    topValue = maxHeap.pop();
    let left = childNodes(index);
    let right = childNodes(index, "r");
    while (maxHeap[index] < Math.max(maxHeap[left], maxHeap[right])) {
      let highestValue = maxHeap[left] > maxHeap[right] ? left : right;

      swapper(index, highestValue);
      index = highestValue;
      left = childNodes(index);
      right = childNodes(index);
    }
  }
  return topValue;
};

const array = Array(7)
  .fill()
  .map((v, i) => i + 1);
while (array.length) {
  let randValue = Math.floor(Math.random() * array.length - 1);

  insert(array.splice(randValue, 1)[0]);
}
console.log(maxHeap);

console.log(removeTop())
console.log(maxHeap)
