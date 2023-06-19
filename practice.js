const minimumAverageDifference=(num)=>{
    if(num.length<2) return 0
    let sum=num.reduce((x,y)=>x+y)
    let totalValue=num[0]
    sum=sum-totalValue
    let minDiff=Infinity
    let index=0
    let length=num.length-1
    for(let i=0;i<num.length;i++){
        length===0 ? length=1 : ""
        let avg=Math.abs(Math.floor(totalValue/(i+1))- Math.floor(sum/length))
        if(avg<minDiff){
            minDiff=avg
            index=i
        }
        if(num[i+1]!==undefined){
       totalValue=totalValue+num[i+1]
       sum=sum-num[i+1]
       length--
        } 
    }
    return index
}

console.log(minimumAverageDifference([2,5,3,9,5,3]))