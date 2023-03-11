const alphabetPrevelance=()=>{
    let alphabet={}
    for(let i=97;i<=122;i++){
        let value=String.fromCharCode(i)
        alphabet[value]=0
    }
    console.table(alphabet)
}

alphabetPrevelance()
