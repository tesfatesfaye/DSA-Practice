const sum=(firstNumber=0,secondNumber=0)=>{
    return firstNumber+secondNumber
}

const summation=(...input)=>{
    let sum=0
    input.map(value=>sum+=value)
   return sum
}

summation(30,20,40,50)