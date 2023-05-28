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

    set(key,value) {
        let hashedValue = this._hash(key)
        console.log(hashedValue)
        if (!this.keyMap[hashedValue]) {
            this.keyMap[hashedValue] = [[key,value]]
        }
        else {
            this.keyMap[hashedValue].push([key,value])
        }
        return this.keyMap
        }
        
    
    get(key) {
        let hashedValue = this._hash(key)
        let value = this.keyMap[hashedValue]
            if(value){
                value=value.find(x=>x[0]===key)
                if(value) value=value[1]
            }
            return value
        }

    }

let hashTable=new HashTable()
hashTable.set("helloword","goodbye")
hashTable.set("outthere","hellothere")
hashTable.set("ihatedogs","callof")
hashTable.set("idontlikepeople","goodMorning")
console.log(hashTable.get('helloword'))
console.log(hashTable.keyMap)

