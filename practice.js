class MaxBinaryHeap{
constructor(){
    this.value=[]
}
    swap(indexOne,indexTwo){
        [this.value[indexOne], this.value[indexTwo]]=[this.value[indexTwo],this.value[indexOne]]
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
                else{
                    break;
                }
            }
            return this.value
    }
    extractMax(){
        if(this.value.length<=1){return this.value.pop()}
        this.swap(0,this.value.length-1)
        let max=this.value.pop()
        let index=0
            while(true){
            let leftChild=this.value[(2*index)+1]
            let rightChild=this.value[(2*index)+2]
            let largerChild=rightChild>leftChild ? ((2*index)+2) :((2*index)+1)
            if(this.value[largerChild]>this.value[index]){
                this.swap(largerChild,index)
                index=largerChild
            }
            else{
                    break
            }
          
            }
            return max

    }

}

const max= new MaxBinaryHeap()
let array=[41,39,33,18,27,12]
let counter=0
    while(counter<array.length){
        max.insert(array[counter])
        counter++
    }

    console.log(max)
    console.log(max.insert(55))
    console.log(max.extractMax())
    console.log(max)