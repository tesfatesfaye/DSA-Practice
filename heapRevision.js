class MaxBinary{
    constructor(){
        this.value=[]
    }

    swap(indexOne,indexTwo){
        [this.value[indexOne],this.value[indexTwo]]=[this.value[indexTwo],this.value[indexOne]]
    }
    findChild(index,value=0){
        let childIndex=undefined
        if(value===1){
        childIndex=index*2+2     
       }
       else{
        childIndex=index*2+1
       }
        return this.value[childIndex]!==undefined ? childIndex : index
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

    extractMax(){
        if(!(this.value.length>0)){
            this.value.pop()
            return []
        }
        this.swap(0,this.value.length-1)
        let max=this.value.pop()
        let index=0
        while(true){
            let leftChild=this.findChild(index)
            let rightChild=this.findChild(index,1)
            let largerChild=this.value[leftChild]>this.value[rightChild] ? leftChild : rightChild
            if(this.value[largerChild]>this.value[index]){
                this.swap(largerChild,index)
                index=largerChild
            } 
            else{
                break;
            }
        }


        return max


    }
    

}



const heap=new MaxBinary()
const m=[1,2,3,4,5,6,7,8,9,10]
for(let i of m){
    heap.insert(i)
}
// console.log(heap.value)
console.log(heap.extractMax())
console.log(heap.value)


