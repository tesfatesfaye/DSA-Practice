// const rotate = (nums, k) => {
//   k %= nums.length;
//   const reverse = (start, end) => {
//     while (start < end) {
//       [nums[start], nums[end]] = [nums[end], nums[start]];
//       start++;
//       end--;
//     }
//   };
//   if (k > 0) {
//     reverse(0, nums.length - 1);
//     reverse(0, k - 1);
//     reverse(k, nums.length-1);
//   }

//   return nums
// };
 let heap = [];
const swap = (i, j) => {
  [heap[i], heap[j]] = [heap[j], heap[i]];
};
const removeLowestValue=()=>{
  let lowestValue=heap[heap.length-1]
   let range = heap.length-Math.ceil(heap.length / 2);
    let index=heap.length-1

   while (range<index) {
    if(lowestValue>heap[index]){
      swap(index,heap.length-1)
      lowestValue=heap[index]
    }
    index--
   }
   return heap.pop()
}

  let k=2

 
    const setHeap = (value) => {
       heap.push(value);
    
      const parent = (x) => {
        return Math.floor((x-1 / 2) );
      };
      
      let index = heap.length - 1;
      while (index) {
       let pv=parent(index)
        if (value > heap[pv]) {
          swap(parent(index), index);
          index = pv
        } else {
          break;
        }
      }
        while(k<heap.length){
          removeLowestValue();
        }
      
    };

let holder = [3, 2, 1, 5, 6, 4];

for(let i of holder){
  setHeap(i)
}

console.log( removeLowestValue())
console.log(heap)
