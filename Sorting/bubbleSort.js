
//bubble sort is good for when an array is mostly sorted
const bubbleSort=(arr)=>{ 
  // Unoptimized bubble sort function
    let counter=0
      for(let i=0;i<arr.length;i++){
                for(let j=0;j<arr.length-i;j++){
               counter++
         if(arr[j]>arr[j+1]){
           [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
         
        }
          } 
              
    }
    console.log(counter)
    return arr

}
    console.log(bubbleSort([1,2,3,5,4]))








const bubbleSortOptimized=(arr)=>{ 
  // this function is optimized to end if the function doesn't swap at some point 
    
    let counter=0
      for(let i=0;i<arr.length;i++){
            let noSwaps=true
       for(let j=0;j<arr.length-i;j++){
                counter++
         if(arr[j]>arr[j+1]){
           [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
           noSwaps=false
        }
      
       } 
       if(noSwaps===true){
        console.log(counter)    
        return arr
    }
   
       
    }
    console.log(counter)
    return arr

}
    console.log(bubbleSortOptimized([1,2,3,5,4]))











// const bubbleSortColt=(arr)=>{
//      let temp=0
//     let counter=0
//     for(let i=arr.length;i>0;i--){
//         for(let j=0;j<i;j++){
//             counter++
//             if(arr[j]>arr[j+1]){
//              temp=arr[j+1]
//            arr[j+1]=arr[j]
//             arr[j]=temp
//         }

//     }


// }
//         console.log(counter)
//         return arr

// }

// console.log(bubbleSortColt([1,2,5,4,-3,9,12]))



