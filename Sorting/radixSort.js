// const getDigit=(num,digit)=>{
// let stringNum=num.toString()
// let value=0
// digit<stringNum.length ? value=stringNum[stringNum.length-(digit)-1] : value=0

// return parseInt(value)
// }


// console.log(getDigit(12345,2))

const getDigit=(num,i)=>{
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

 console.log(getDigit(12345,3))