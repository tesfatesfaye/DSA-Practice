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


 const digitCount=(num)=>{

    return Math.floor(Math.log10(Math.abs(num)))+1



 }

 const mostDigits=(arr)=>{

    let maxDigits=0

    for(let i of arr){

       maxDigits= Math.max(maxDigits,digitCount(i))
        
    }

    return maxDigits

 }

 console.log(mostDigits([12398,56,7]))


 const radixSort=(arr)=>{

   let maxSize=mostDigits(arr)

   for(let k=0;k<maxSize;k++){
      let bucket=Array.from({length:10},()=>[])
  

      for(let i=0;i<arr.length;i++){
         let digit=getDigit(arr[i],k)
         bucket[digit].push(arr[i])
      }
      
      arr=[].concat(...bucket)

   }
      return arr
 }

console.log (radixSort([23,345,5467,12,2345,9852]))