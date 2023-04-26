//selection sort is o(n^2) so it's not ideal for most situations, but if you don't wan to write to 
// memory that much it's possibly an option 
const selectionSort=(arr)=>{

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j <arr.length;j++){
        if(arr[j]<arr[i]){
            [arr[j],arr[i]]=[arr[i],arr[j]]
        }
    }

}
    return arr


}

console.log(selectionSort([3,1,2]))


const selectionSortInstructor=(arr)=>{
 for(let i=0; i<arr.length;i++){
    let lowest=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[lowest]){
            lowest=j
        }
        }
        [arr[lowest],arr[i]]=[arr[i],arr[lowest]]
 }

 return arr

}

console.log(selectionSort([4,1,3,6,5]))



