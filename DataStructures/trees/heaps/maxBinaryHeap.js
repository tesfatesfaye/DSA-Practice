class MaxBinaryHeap{
    constructor(){
        this.values=[]
    }
        swap(indexOne,indexTwo){
            [this.values[indexOne], this.values[indexTwo]]=[this.values[indexTwo],this.values[indexOne]]
        }
        insert(val){
            this.values.push(val)
            let index=this.values.length-1
            const parent=(x)=>{
              return (Math.floor((x-1)/2))
            }
                while(index){
                    let parentIn=parent(index)       
                if(val>this.values[parentIn]){
                    this.swap(parentIn,index)
                    index=parentIn
                   
                }
                    else{
                        break;
                    }
                }
                return this.values
        }
        extractMax(){
            if(this.values.length<=1){
                if(this.values.length===1)return this.values.pop()
                return null
            }
               
            this.swap(0,this.values.length-1)
            let max=this.values.pop()
            let index=0
                while(true){
                    let leftChild=this.values[(2*index)+1]!==undefined ? (2*index)+1 : index
                    let rightChild=this.values[(2*index)+2]!==undefined ? (2*index)+2 : index
                    let largerChild=this.values[rightChild]>this.values[leftChild] ? rightChild :leftChild
                if(this.values[largerChild]>this.values[index]){
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
        console.log(max.extractMax())
        console.log(max.extractMax())
        console.log(max.extractMax())
        console.log(max.extractMax())
        console.log(max.extractMax())
        console.log(max.extractMax())
        console.log(max.extractMax())
        console.log(max.values)