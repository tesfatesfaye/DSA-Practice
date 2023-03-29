//highly utilized for sorting algorithm 
const binarySearch=(arr,val)=>{
if(arr.length===0){
return null
}
let minValue=0
let maxValue=arr.length-1

while(minValue<=maxValue){
let middleValue=Math.floor((maxValue+minValue)/2)
if(arr[middleValue]>val){
    maxValue=middleValue-1
   
    }
else if(arr[middleValue]<val){
    minValue=middleValue+1
   
}
else{
        return middleValue 
    }
}
 return -1

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],9))