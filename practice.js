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

console.log(searchInsert([1,3,5,7],4))
