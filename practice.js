//basic hash function
// let array=10
// const hash=(key,arrayLen)=>{
//     let total=0
//     let prime=31
//     for(let i=0;i<Math.min(key.length,100);i++){
//         let char=key[i]
//         let value=char.charCodeAt(0)-96
//         total=(total*prime+value)% arrayLen;

//     }
//     return (total)

// }

class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let hashedValue = this._hash(key)
        let keyMap = this.keyMap
        if (!keyMap[hashedValue]) {
            keyMap[hashedValue] = [[key, value]]
        }
        else {
            let sameKey = keyMap[hashedValue].find(x => x[0] === key)
            if (sameKey) {
                sameKey[1] = value
            }
            else {
                keyMap[hashedValue].push([key, value])
            }
        }
        return this.keyMap
    }


    get(key) {
        let hashedValue = this._hash(key)
        let value = this.keyMap[hashedValue]
        if (value) {
            value = value.find(x => x[0] === key)
            if (value) value = value[1]
        }
        return value
    }
    keys() {
        let keysArray = []
        const helper = (array) => {

            for (let i of array) {
                if (i !== undefined) {
                    if (Array.isArray(i[0])) {
                        helper(i)
                    }
                    else {
                        keysArray.push(i[0])
                    }
                }

            }

        }
        helper(this.keyMap)

        return keysArray
    }


    values(array = this.keyMap, valuesArray = []) {

        for (let i of array) {
            if (i !== undefined) {
                if (Array.isArray(i[0])) {
                    this.values(i, valuesArray,false)
                }
                else {
                    if (!valuesArray.includes(i[1])) {
                        valuesArray.push(i[1])
                    }
                }
            }

        }
               
            return valuesArray
        
       
    }

}

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
ht.set("purple", "#DDA0DD")
ht.set("violet", "#DDA0DD")
console.log(ht.keys())
console.log(ht.values())

