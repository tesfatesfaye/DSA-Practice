const fib = (value) => {
    if (value > 1) {
        const memoObj = { "0": 0, "1": 1 }
        const helper = (num) => {
            if (memoObj[num] !== undefined) return memoObj[num]

            // if(num==0 || num==1) return memoObj[num]
            memoObj[num] = (helper(num - 1) + helper(num - 2))
            return memoObj[num]
        }

        return helper(value)
    }
    return 0

}

console.log(fib(9))