class MaxBinary{
    constructor(){
        this.value=[]
    }

    swap(indexOne,indexTwo){
        [this.value[indexOne],this.value[indexTwo]]=[this.value[indexTwo],this.value[indexOne]]
    }

    
    insert(val){
        this.value.push(val)
        let index=this.value.length-1
        const parent=(x)=>{
            return (Math.floor((x-1)/2))
        }
        while(index){
            let parentIn=parent(index)
            if(val>this.value[parentIn]){
                this.swap(parentIn,index)
                index=parentIn
            }
            else {
                break
            }
        }
        return this.value
    }
    

}

const heap=new MaxBinary()
const m=[1,2,3,4,5,6,7,8,9,10]
for(let i of m){
    heap.insert(i)
}
console.log(heap.value)


