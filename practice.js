const quickSort=(array)=>{
if(array.length<=1){
    return array;
}

const pivot=array[array.length-1];
const leftArray=[]
const rightArray=[]
for(let i=0;i<array.length-1;i++){
    array[i] <pivot ? leftArray.push(array[i]) : rightArray.push(array[i])
}
    if(leftArray.length>0 && rightArray.length>0){
    return[...quickSort(leftArray),pivot,...quickSort(rightArray)]    

}
else if(leftArray.length>0){
    return[...quickSort(leftArray),pivot]
}
else {
    return[pivot,...quickSort(rightArray)]

}

}


console.log(quickSort([5,12,8,9,6,2,11,5,3,4]))