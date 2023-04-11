const fib=(input)=>{
    if(input===1||input===2) return 1
    let fibValues=[1,1]
        const helperFunction=(inputIndex)=>{
        
        if(fibValues.length===inputIndex)return 
            
        fibValues.push(fibValues[fibValues.length-1]+fibValues[fibValues.length-2])
        
        helperFunction(inputIndex)
        }

        helperFunction(input)

        return fibValues[input-1]

}

console.log(fib(8))