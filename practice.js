const fib = (num) => {
        const memo = { "0": 0, "1": 1 }
        const helper = (num) => memo[num] ?? (memo[num]=helper(num - 1) + helper(num - 2))
        return (num > 1 ? helper(num): 0)
    }
    console.log(fib(1))

const fibNoHelper=(num,first=true,memo={"0":0,"1":1})=>{
return (first&&num<=1) ? 0:memo[num] ?? (memo[num]=fibNoHelper(num-1,false)+fibNoHelper(num-2,false))
   }

console.log(fibNoHelper(3))
