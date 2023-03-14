function anagrams(stringOne, stringTwo){
if(stringOne.length!==stringTwo.length){
    return false
}

let stringOneHolder={}
let stringTwoHolder={}

for(let i of stringOne){

    stringOneHolder[i] ? stringOneHolder[i]=+1 : stringOneHolder[i]=1
}

for(let i of stringTwo){

    stringTwoHolder[i] ? stringTwoHolder[i]=+ 1 : stringTwoHolder[i]=1
}

for(let i in stringOneHolder){
    if(!( i in stringTwoHolder)){
        return false
    }

    if(stringOneHolder[i]!==stringTwoHolder[i]){
        return false
    }
}
return true


}

console.log(anagrams("hello","ollhe"))