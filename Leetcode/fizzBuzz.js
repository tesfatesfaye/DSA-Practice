const fizzBuzz =(n)=> {

    let printValue=""
    let arry=[]
    for(let i=1;i<=n;i++){
        if(i%3===0){
            printValue="Fizz"
        }
        if(i%5===0){
            printValue+="Buzz"
        }
        printValue ? arry.push(printValue) : arry.push(i.toString())
        printValue=""
    }
        return arry
    
    };