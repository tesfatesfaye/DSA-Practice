const binarySearch=(arr,value)=>{

    let left=0;
    let right=arr.length-1
    
    while(left<=right){
        let middle= Math.floor((right+left)/2)
      
        if(arr[middle]===value){ 
         
            return middle
        }
        else if(arr[middle]< value){
            left=middle+1
            
        }

        else if(arr[middle]>value){
            right=middle-1
        }

        
    }
    
        return -1    


    }
    console.log(binarySearch([1,3,4,6,8,9,11,12,15,16,17,18,19],15))


    // const searchInsert = (nums, target)=> {
//     let start=0
//     let end=nums.length-1
//     let middle;
  
//             while(start<=end){
//                middle=Math.floor((start+end)/2)
//                if(nums[middle]===target){
//                    return middle
//                } 
//                else if(target>nums[middle]){
//                    start=middle+1
                 
//                }
//                 else{
//                     end=middle-1
                 
//                 }
//             }
           

           
//         return  end +1

        
// };

// console.log(searchInsert([1,3,5,7],4))