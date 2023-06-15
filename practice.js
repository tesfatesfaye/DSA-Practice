const fib = (num) => {
    if(num<=0) return 0
    const memo = { "1": 1, "2": 1 }
    const helper = (num) => {
        if (num <= 2) return memo[num] 
        return memo[num] ?? (memo[num] = helper(num - 1) + helper(num - 2))
    }
    return helper(num)
}
console.log(fib(2))

const fibNoHelper = (num, memo = { "1": 1, "2": 1 }) => {
    return ( num===0) ? num : memo[num] ?? (memo[num] = fibNoHelper(num - 1) + fibNoHelper(num - 2))
}

console.log(fibNoHelper(6)) 
