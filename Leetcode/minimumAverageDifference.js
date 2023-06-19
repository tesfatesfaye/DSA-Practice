const minimumAverageDifference = (num) => {
    if (num.length < 2) return 0
    let rightSum = num.reduce((x, y) => x + y)
    let leftValue = num[0]
    rightSum = rightSum - leftValue
    let minDiff = Infinity
    let index = 0
    let length = num.length - 1
    for (let i = 0; i < num.length; i++) {
        length === 0 ? length = 1 : ""
        let avg = Math.abs(Math.floor(leftValue / (i + 1)) - Math.floor(rightSum / length))
        if (avg < minDiff) {
            minDiff = avg
            index = i
        }
        if (num[i + 1] !== undefined) {
            leftValue = leftValue + num[i + 1]
            rightSum = rightSum - num[i + 1]
            length--
        }
    }
    return index
}

// console.log(minimumAverageDifference([2,5,3,9,5,3]))

const minimumAverageDifferenceTwo = (num) => {
    if (num <= 1) return 0
    let rightSum = num.reduce((x, y) => x + y)
    let minDiff = Math.abs(Math.floor(rightSum / num.length))
    let minIndex = num.length - 1
    let leftSum = 0
    for (let i = 0; i < num.length - 1; i++) {
        leftSum = leftSum + num[i]
        rightSum = rightSum - num[i]
        let leftDivisor = i + 1
        let rightDivisor = num.length - leftDivisor
        let avgDifference = Math.abs(Math.floor(leftSum / leftDivisor) - Math.floor(rightSum / rightDivisor))
        if (avgDifference <= minDiff) {

            if ((avgDifference < minDiff) || (minIndex > i)) {
                minDiff = avgDifference
                minIndex = i
            }

        }

    }


    return minIndex

}
console.log(minimumAverageDifferenceTwo([2, 5, 3, 9, 5, 3]))