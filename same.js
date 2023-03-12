//function that checks if the values of one array squared in another, they must have the same frequency
function squared(arrayOne, arrayTwo){ //example one 
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

console.log(squared([2,4,8],[4,16,64]))
console.log(squared([1],[1]))

// example one works fine but a cleaner version is presented below.


function squaredTwo(arrayOne,arrayTwo){ //very similar solution albeit cleaner however, it's still o(n^2)
    if(arrayOne.length!==arrayTwo.length){
            return false
    }
for(let i=0; i<arrayOne.length;i++){
    let holder=arrayTwo.indexOf(arrayOne[i] ** 2)
    if(holder===-1){
        return false
    }
    console.log(arrayTwo)
    arrayTwo.splice(holder,1)

}
        return true;

}

console.log(squaredTwo([2,4,8],[4,16,64]))
console.log(squaredTwo([2,4,8],[4,16,12]))
console.log(squaredTwo([2,4,8],[4,16]))