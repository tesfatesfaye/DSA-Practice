const naiveStringSearch=(longerString,shorterString)=>{
    if(shorterString.length>longerString.length) return 0
    let count=0
    let placement=0
    for(let i=0; i<longerString.length;i++){
        if(longerString[i]===shorterString[placement]){
                
            if(placement===shorterString.length-1){
                    count++
                    placement=0
                }    
                else{
                    placement++
                }

                }
        
    
            else{
                placement=0
            }
            

        }

        return count

}


console.log(naiveStringSearch("there there mother hello", "hello"))