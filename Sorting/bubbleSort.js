
//bubble sort is good for when an array is mostly sorted
    const bubbleSort=(arr)=>{
      const swap=(num,val,valTwo)=>([num[val],num[valTwo]]=[num[valTwo],num[val]])
      for(let i=1;i<arr.length;i++){
        let swapped=false
          for(let j=0;j<arr.length-i;j++){
              if(arr[j]>arr[j+1]){
                  swap(arr,j,j+1)
                  swapped=true
              }
          }
            if(!swapped){
              return arr
          }
         
      }
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



