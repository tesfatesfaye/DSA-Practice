const merge = (nums1, m, nums2, n) =>{
    let newArray=[]
    let leftPointer=0
    let rightPointer=0
    
    while(leftPointer<m || rightPointer<n){
           

        if(nums1[leftPointer]<=nums2[rightPointer]){
            newArray.push(nums1[leftPointer])
            leftPointer ++
        }
        else {
            newArray.push(nums2[rightPointer])
            rightPointer ++
        }


    }
        

    return newArray

};

console.log(merge([1,2,3,4,5,10,11],7,[1,3,3,8,9,11],0))