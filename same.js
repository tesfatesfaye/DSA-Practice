function sim(arrayOne, arrayTwo){
    let similar=[]
    if(arrayOne.length!==arrayTwo.length){
         return false
        }

    for(let i=0;i<arrayOne.length;i++){

        for(let j=0;j<arrayTwo.length;j++){
            if(arrayTwo[j]===arrayOne[i]*arrayOne[i]){
                similar.push(arrayTwo[j])
                arrayTwo.splice(j,1)
               
            }

        }
    
    }
       if(similar.length===arrayOne.length){
        return true
       }
       
       return false

       

}

console.log(sim([2,4,8],[4,16,78]))
console.log(sim([1],[1]))


