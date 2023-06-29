const minSubArrayLen=(num,target)=>{
let left=0;
let right=0;
let minLength=Infinity
let sum=0
    while(right<num.length){
        sum+=num[right]
        while(sum>=target){
            minLength=Math.min(minLength,right-left+1)
            if(minLength===1) return minLength
            sum-=num[left]
            left++

        }
        right++

    }
    return minLength===Infinity ? 0 : minLength


}
console.log(minSubArrayLen([2,3,1,2,4,3], 7))