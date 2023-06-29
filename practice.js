const minSubArrayLen=(num,val)=>{
let left=0
let right=0
let minLength=Infinity
let sum=0
    while(right<num.length){
        sum+=num[right]
        
        while(sum>=val){
        minLength=Math.min(minLength,right-left+1)
        if(minLength===1) return minLength
        sum-=num[left]
        left++
        }
        right++

    }
    return (minLength!==Infinity ? minLength : 0)


}