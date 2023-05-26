const  firstMissingPositive = (nums)=> {
    let holder={}
    for(let i of nums){
        if(i>0){
        holder[i]=1
        }
    }
    let counter=1;
    while(true){
        if(!holder[counter]){
            return counter
        }
        counter++
    }

};