    const fibTwo=(n)=>{
  if(n<=2) return 1
    
    return fib(n-1)+fib(n-2)
    
    
    }
    
    console.log(fibTwo(1000))