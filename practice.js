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
    constructor(size = 53) {
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

    set(key,value) {
        let hashedValue = this._hash(key)
        if (!this.keyMap[hashedValue]) {
            this.keyMap[hashedValue] = value
        }
        else {
            if (Array.isArray[keyMap[hashedValue]]) {
                (this.keyMap[hashedValue]).push(value)
            }
            else {
                this.keyMap[hashedValue] = [this.keyMap[hashedValue], value]
            }
        }
        return this.keyMap
    }
    get(key) {
        let hashedValue = this._hash(key)
        let value = this.keyMap[hashedValue]
        if (!value) {
            return undefined
        }
        else if (Array.isArray(value)) {
             
                let value = value.find(x => x === hashedValue)
               

            }
            return value
        }

    }

let hashTable=new HashTable()
hashTable.set("five",5)
console.log(hashTable.get("five"))
console.log(hashTable.get("fiv"))

