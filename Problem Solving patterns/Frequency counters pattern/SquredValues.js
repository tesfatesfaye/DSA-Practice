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
   
    arrayTwo.splice(holder,1)

}
        return true;

}


function squaredFour(arrayOne,arrayTwo){
    if(arrayOne.length!==arrayTwo.length){
        return false
    }
let arrayOneHolder={}
let arrayTwoHolder={}
for(let value of arrayOne){
    arrayOneHolder[value] ? arrayOneHolder[value]++ : arrayOneHolder[value]=1 
}
for(let value of arrayTwo){
    arrayTwoHolder[value] ? arrayTwoHolder[value]++: arrayTwoHolder[value]=1 
}

for(let value in arrayOneHolder){
    if(!(arrayTwoHolder[value**2])){
        return false
    }
    if(arrayOneHolder[value]!==arrayTwoHolder[value**2]){
        return false
    }
}
   
    return true

}
console.log(squaredFour([1,2,3,2,2],[1,4,4,4,9]))




