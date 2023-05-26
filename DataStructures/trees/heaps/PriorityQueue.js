class Node{
    constructor(val,priority){
        this.val=val
        this.priority=priority
    }
}
class PriorityQueue{
    constructor(){
        this.values=[]

    }
        swap(indexOne,indexTwo){
            [this.values[indexOne], this.values[indexTwo]]=[this.values[indexTwo],this.values[indexOne]]
        }
        Enqueue(val,priority){
            let newNode=new Node(val,priority)
            this.values.push(newNode)
            let index=this.values.length-1
            const parent=(x)=>{
              return (Math.floor((x-1)/2))
            }
                while(index){
                    let parentIn=parent(index)       
                if(((this.values[index]).priority)<((this.values[parentIn]).priority)){
                    this.swap(parentIn,index)
                    index=parentIn
                   
                }
                    else{
                        break;
                    }
                }
                return this.values
        }

        Dequeue(){
            if(this.values.length<=1){
                if(this.values.length===1)return this.values.pop()
                return null
            }
               
            this.swap(0,this.values.length-1)
            let min=this.values.pop()
            let index=0
                while(true){
                let leftChild=this.values[(2*index)+1] ? (2*index)+1 : index
                let rightChild=this.values[(2*index)+2] ? (2*index)+2 : index
                let largerPriority=this.values[rightChild].priority<this.values[leftChild].priority ? rightChild :leftChild
                console.log(largerPriority)
                if((this.values[largerPriority]).priority<this.values[index].priority){
                    this.swap(largerPriority,index)
                    index=largerPriority
                }
                else{
                        break
                }
              
                }
                return min
    
        }
   
    
    }
    
    const min= new PriorityQueue()
    let array=[new Node(41,0),new Node(18,5),new Node(33,2), new Node(39,1),new Node(27,3),new Node(12,6)]
    let counter=0
        while(counter<array.length){
            console.log(min.Enqueue(array[counter].val,array[counter].priority))
            counter++
        }
    console.log(min.values[0])
    console.log(min.Dequeue())
    console.log(min.values[0])