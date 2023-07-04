const partitionString = (s) =>{
    if(!s.length) return 0
    let counter=1
    let set=new Set()
    
    for(let i=0;i<s.length;i++){
        if(!set.has(s[i])){
           set.add(s[i])
        }
        else{
            set.clear()
            set.add(s[i])
            counter++
                       
        }
    }
    return counter
};

console.log(partitionString('abacaba'))