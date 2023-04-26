const pivotHelper=(arr,start=0,end=arr.length-1)=>{
  let middle=Math.floor((start+end)/2)
const swap=(arr,i,j)=>{
   
        [arr[i],arr[j]]=[arr[j],arr[i]];
       
    }
let pivot=arr[start]
let swapIdx=start
 for(let i=start;i<=end;i++){
   
   if(pivot>arr[i]){
    swapIdx=swapIdx+1
    console.log(swapIdx)
    swap(arr,i,swapIdx)
   
   
   }
 }
 swap(arr,start,swapIdx)
 return swapIdx
}

console.log(pivotHelper([4,8,2,1,5,7,6,3]))

function quickSort(arr,left=0,right=arr.length-1){
  
    
  if(left<right){
    let pivotIndex=pivotHelper(arr,left,right)
    quickSort(arr,left,pivotIndex-1)
   quickSort(arr,pivotIndex+1,right)

  }
  // console.log(arr)
  return arr
}

console.log(quickSort([4,8,2,1]))


function partition(items, left, right) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  var pivot   = items[Math.floor((right + left) / 2)], //middle element
      i       = left //left pointer
      j       = right; //right pointer
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j); //swapping two elements
          i++;
          j--;
      }
  }



  return i;
}

function quickSortCenter(items, left, right) {
  let index;
  if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSortCenter(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSortCenter(items, index, right);
      }
  }
  return items;
}
// first call to quick sort
let items = [5,3,4,6,2,9,2];
let sortedArray = quickSortCenter(items, 0, items.length - 1);

// console.log(quickSortCenter(items));



