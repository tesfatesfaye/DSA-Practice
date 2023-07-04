var partitionString = function(s) {
    if(!s.length) return 0
    let counter=1
    let holder={}
    let par=""
    for(let i in s){
        if(!holder[s[i]]){
            par+=s[i]
            holder[s[i]]=1
        }
        else{
            holder={}
            holder[s[i]]=1
            counter++
            par=s[i]
            
        }
    }
    return counter
};

console.log(partitionString('abacaba'))