const pivotHelper=(arr,start=0,end=arr.length-1)=>{
const swap=(arr,i,j)=>{
    if(i!==j){ 
        [arr[i],arr[j]]=[arr[j],arr[i]]}
       
    }
let pivot=arr[start]
let swapIdx=start
 for(let i=start+1;i<end;i++){
   
   if(pivot>arr[i]){
    swapIdx++;
    swap(arr,swapIdx,i)
   
   }
 }
 swap(arr,start,swapIdx)
 return swapIdx
}

// console.log(pivotHelper([4,8,2,1,5,7,6,3]))

function quickSort(arr,left=0,right=arr.length-1){
  let pivotIndex=pivotHelper(arr,left,right)
 
  if(left<right){
    quickSort(arr,left,pivotIndex-1)
   quickSort(arr,pivotIndex+1,right)

  }
  // console.log(arr)
  return arr
}

console.log(quickSort([4,8,2,1,5,7,8,9]))





