
const findMinValueSubarrayLeft = (arr) => {
  const map = new Map();
  const heap = [];
  const minValues = [];
  const parent = (x) =>{ 
    return Math.floor((x - 1) / 2)};
  const child = (index, val = 0) => {
    let childIn =  val ? index * 2 + 2 : index * 2 + 1;
    return heap[childIn]!==undefined ? childIn : index;
  };
  const swap = (x, y) => [heap[x], heap[y]] = [heap[y], heap[x]];
  const insert = (i) => {
        heap.push(i);
      map.has(i) ? map.set(i, map.get(i) + 1) : map.set(i, 1);
      let index = heap.length - 1;
      while (index) {
        let par = parent(index);
        if (i < heap[par]) {
          swap(index, par);
          index = par;
        } else {
          break;
        }
      
    }
    return heap;
  };
  const extractMin = () => {
    let index = 0;
    swap(index, heap.length - 1);
    let min = heap.pop();
    while (true) {
      let left = child(index, 0);
      let right = child(index, 1);
      let smallest = heap[left] < heap[right] ? left : right;
      if (heap[smallest] < heap[index]) {
        swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
    return min;
  };
  for(let i of arr){
      insert(i);
  }

  for (let i of arr) {
    let lowest = heap[0];
    minValues.push(lowest);
    map.set(i, map.get(i) - 1);
    
    while (map.get(lowest)==0) {
      extractMin();
      lowest = heap[0];
    }


  }
console.log(map)
return minValues
};
const array = [1, 4, 3, 7, 4, 5];
console.log(findMinValueSubarrayLeft(array));