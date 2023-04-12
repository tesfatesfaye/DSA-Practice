let objj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66,
            rand:{two:22}
        }
    }
}


const stringifyNumbers=(value)=>{
    let valueObj={}
    for(let item in value){
        if(typeof value[item]==="object" && !Array.isArray(value[item])){
            valueObj[item]=stringifyNumbers(value[item])

        }

        else if(typeof value[item]==="number"){
            valueObj[item]=value[item].toString()
        }
        else{
            valueObj[item]=value[item]
        }
    }

    return valueObj

}

console.log(stringifyNumbers(objj))