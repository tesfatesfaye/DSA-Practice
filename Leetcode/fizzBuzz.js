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
        
        if(!printValue.length){
             arry.push(i.toString())
        }
        else{
            arry.push(printValue)
        }
        printValue=""
    }
        return arry
    
    };