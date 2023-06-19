
const minSubArrayLength = (target, num) => {
   
    let leftPointer = 0
    let rightPointer = 0
    let sum = 0
    let min = Infinity
    while (rightPointer < arr.length) {
        sum += arr[rightPointer]
        while (sum >= target) {
            min = Math.min(rightPointer - leftPointer + 1, min)
            if (min === 1) return min
            sum -= arr[leftPointer]
            leftPointer++

        }
        rightPointer++


    }
    return min===Infinity ? 0 : min

}

console.log(min(7, [2, 3, 1, 2, 4, 3]))





// function minSubArrayLen(target, num) {
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



