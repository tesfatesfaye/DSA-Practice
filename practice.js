class MaxBinaryHeap{
constructor(){
    this.value=[]
}
    insert(val){
        this.value.push(val)
        if(this.value.length===1) return this.value
        let index=this.value.length-1
        const parent=(x)=>{
          return (Math.floor((x-1)/2))
        }
            while(index){
                let parentIn=parent(index)       
            if(val>this.value[parentIn]){
                [this.value[parentIn],this.value[index]]=[this.value[index],this.value[parentIn]]
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
console.log(max.insert(5))
console.log(max.insert(6))
console.log(max.insert(7))