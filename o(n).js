function sumOfN(n){
    let total=0    
    for(let i=1;i<=n;i++){
            total +=i
        }
        return total
}

console.log(sumOfN(3))



let time1=performance.now()
sumOfN(10000)
let time2=performance.now()
