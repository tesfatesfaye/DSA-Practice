const findMedianSortedArrays = (nums1, nums2)=> {
        if(nums1.length===0 && nums2.length===0){
            return null
        }
    let newArray=[]
    let leftPointer=0
    let rightPointer=0
    
    while(leftPointer<nums1.length && rightPointer<nums2.length){
           
          
        if(nums1[leftPointer]<=nums2[rightPointer]){
            newArray.push(nums1[leftPointer])
            leftPointer ++
           
        }
        else if(nums2[rightPointer]<nums1[leftPointer]){
            newArray.push(nums2[rightPointer])
             rightPointer ++
        }


    }
        
         if(nums2.length<=rightPointer){
         newArray=newArray.concat(nums1.slice(leftPointer))
       }
        else {
         newArray=newArray.concat(nums2.slice(rightPointer))
        }
        
        if(newArray.length%2===0){
        let lowerValue=newArray[(newArray.length/2)]
        let higherValue=newArray[(newArray.length/2)-1]
        return ((lowerValue+higherValue)/2)

             }
        let value=Math.floor(newArray.length/2)
        return newArray[value]
   
};

console.log(findMedianSortedArrays([1,3,4,14],[1,3,5,7,8,9,10,12]))