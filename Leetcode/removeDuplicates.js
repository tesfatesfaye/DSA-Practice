

const removeDuplicates = (nums) =>{
    if(nums.length===0) return 0
    let start=0
    for(let i=1;i<nums.length;i++){
        if(nums[i]!==nums[start]){
            nums[start+1]=nums[i]
            start++

        }
    }
    

    return start+1


};

console.log(removeDuplicates([1,2,2,3,3,4,5,12]))

const removeDuplicatesSets=(nums)=>{
const unique=new Set(nums)
return unique.size
}



console.log(removeDuplicatesSets([1,2,2,3,3,4,5,12]))

















// var removeDuplicates = function(nums) {
//     let obj={}
//     let neg={}
//     let removedDuplicatesArray=[]

// for(let i=0;i<nums.length;i++){
//     if(nums[i]<0){
//         if(!neg[nums[i]]){
//             neg[nums[i]]=1
//         }
//     }
//     else{
//     if(!obj[nums[i]]){
//         obj[nums[i]]=1
        

//     }
//     }
       
// }

//  if(Object.keys(neg).length>0){
//             for(let i in neg){
//                 removedDuplicatesArray.push(parseInt(i))
//                 }
            
//     }

//     if(Object.keys(obj).length>0){
//         for(let i in obj){
//                 removedDuplicatesArray.push(parseInt(i))
//                 }
            
//     }

//     nums.splice(0,nums.length)
//     for(let i of removedDuplicatesArray){
//         nums.push(i)
//     }

// // nums=removedDuplicatesArray
// return nums.length

// };


// console.log(removeDuplicates([-2,-2,-1,0,1,1,1,2,2,3,3,4]))
