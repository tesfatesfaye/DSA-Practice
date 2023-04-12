const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const obb={one:"one",two:"two",three:{five:"three"}}
const collectStrings=(obj)=>{
    let collection=[]

    for(let item in obj){
        if(typeof obj[item]==='string'){
        collection.push(obj[item])
        }
        else {
            collection=[...collection,... collectStrings(obj[item])]
        }


}
    return collection
}

console.log(collectStrings(obj))