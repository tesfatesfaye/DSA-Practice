const pivotHelper=(arr,start=0,end=arr.length+1)=>{
const swap=(arr,i,j)=>{
    if(i!==j){ 
        [arr[i],arr[j]]=[arr[j],arr[i]]}
       
    }
let pivot=arr[start]
let swapIdx=start
 for(let i=start+1;i<arr.length;i++){
   
   if(pivot>arr[i]){
    swapIdx++;
    swap(arr,swapIdx,i)
   
   }
 }
 swap(arr,start,swapIdx)
 return swapIdx
}

console.log(pivotHelper([4,8,2,1,5,7,6,3]))