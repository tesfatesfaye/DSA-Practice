const findMedianSortedArrays = (nums1, nums2) => {
    if (nums1.length === 0 && nums2.length === 0) {
        return null
    }
     let newArray = []
    const median = () => {

      
        if ((nums1.length+nums2.length) % 2 === 0) {
         
            return (newArray[newArray.length - 1] + newArray[newArray.length - 2]) / 2
        }
        else {
            return newArray[newArray.length - 1]
        }
    }

   
    let leftPointer = 0
    let rightPointer = 0
    let medianIndex = Math.floor((nums1.length + nums2.length) / 2)
   
   
    while (leftPointer + rightPointer <= medianIndex && (leftPointer < nums1.length && rightPointer < nums2.length)) {
        if (nums1[leftPointer] < nums2[rightPointer]) {
            newArray.push(nums1[leftPointer])
            leftPointer++
        }
        else {
            newArray.push(nums2[rightPointer])
            rightPointer++
        }
    }
    
    if (leftPointer + rightPointer > medianIndex) {
     
        return (median())
    }
    if (leftPointer < nums1.length) {
        while (medianIndex >= newArray.length) {
                newArray.push(nums1[leftPointer])
                       
            leftPointer++
        }
    }
    else {
        while (medianIndex >= newArray.length) {
           
            newArray.push(nums2[rightPointer])
            
            rightPointer++
        }
    }
    console.log(newArray)
    return (median())

};

console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([],[1]))
console.log(findMedianSortedArrays([],[2,3]))