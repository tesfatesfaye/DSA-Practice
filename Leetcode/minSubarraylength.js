
function minSubArrayLen(target,num) {
    let sum=0
    let rightPointer=0
    let leftPointer=0;
    let minLength=Infinity
    while(rightPointer<num.length){
        sum+=num[rightPointer]
        while(sum>=target){
        minLength=Math.min(minLength,(rightPointer-leftPointer+1))
        sum=sum-num[leftPointer]
        leftPointer++
        }
        rightPointer++
    }
    if(!leftPointer)minLength
   
return minLength===Infinity ? 0 : minLength
}
console.log(minSubArrayLen(15, [1,2,3,4,5]))





// function minSubArrayLen(target, num) { // this won't work in all edge cases
//     let sum = 0
//     let rightPointer = num.length - 1
//     let leftPointer = 0;
//     let minLength = num.length
//     let indexes = []
//     sum = num.reduce((x, y) => x + y)
//     if (sum <= target) {
//         if (sum < target) return 0
//         return minLength
//     }
//     while (leftPointer < rightPointer) {
//         if (num[leftPointer] > num[rightPointer]) {
//             sum = sum - num[rightPointer]
//             if (sum < target) {

//                 return indexes[1] - indexes[0]
//             }
//             indexes = [leftPointer, rightPointer]
//             rightPointer--
//             minLength--

//         }
//         else {
//             sum = sum - num[leftPointer]
//             if (sum < target) {
//                 console.log(indexes)
//                 return (indexes[1] - indexes[0])
//             }
//             indexes = [leftPointer, rightPointer]
//             leftPointer++
//             minLength--

//         }


//     }

//     return indexes[1] - indexes[0]
// }

// console.log(minSubArrayLen(4, [2, 3, 1, 2, 4, 3]))



