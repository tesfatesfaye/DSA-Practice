 const addDigits=(num)=>{
    let stringNum=num.toString()
    let sum=0
    for( let i of stringNum){
        sum= sum+ parseInt(i)
    }

    if(sum.toString().length===1){
        return sum
    }

    
    return addDigits(sum)



  }

  console.log(addDigits(3))