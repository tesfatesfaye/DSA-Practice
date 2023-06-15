const fib = (num) => {
        const memo = { "0": 0, "1": 1 }
        const helper = (num) => memo[num] ?? (memo[num]=helper(num - 1) + helper(num - 2))
        return (num > 1 ? helper(num): 0)
    }
    
    console.log(fib(9))

