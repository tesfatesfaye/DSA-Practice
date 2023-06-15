const fib = (value) => {

        const memo = { "0": 0, "1": 1 }
        const helper = (num) => {
            if (memo[num] !== undefined) return memo[num]
                     return  memo[num] ?? (memo[num]=helper(num - 1) + helper(num - 2))
        }

        return (value > 1 ? helper(value): 0)
    


}

console.log(fib(9))

