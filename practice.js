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