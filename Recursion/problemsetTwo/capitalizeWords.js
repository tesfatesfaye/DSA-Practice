const capitalizeWords=(arr)=>{
let upperCase=[]

    if(arr.length>0){
        return upperCase=[...upperCase,arr[0].toUpperCase(),
        ...capitalizeWords(arr.splice(1))]
        }

        return upperCase


}

console.log(capitalizeWords(["Hello","There","Dar"]))