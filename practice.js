class Node{
    constructor(val){
        this.val=val
        this.next=null
        this.prev=null
    }
}

class DoublyLinkedLists{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0

    }
    push(value){
        let pushedValue=new Node(value)
        if(!this.tail){
            this.head=pushedValue
            this.tail=pushedValue
                        
        }
        else {
            this.tail.next=pushedValue
            pushedValue.prev=this.tail
            this.tail=pushedValue
            

        }
        
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined
        let currentTail=this.tail
        if(this.length===1){
            this.head=null
            this.tail=null
        }

       
        else{
            this.tail=currentTail.prev
            currentTail.prev=null
            this.tail.next=null
        }
    this.length--
        
    return  currentTail
}
    shift(){
        if(!this.head) return undefined
        let currentHead=this.head
        if(this.length===1){
            this.head=null
            this.tail=null
        }
        else{
            this.head=currentHead.next
            currentHead.next=null
            this.head.prev=null
           
        }
        this.length--
        return currentHead
    }
    unShift(value){
        let newNode=new Node(value)
        if(this.length===0){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.head.prev=newNode
            newNode.next=this.head
            this.head=newNode
            
        }
        this.length++
        return this
    }
    get(index){
        if(index<0 || index>=this.length)return undefined
        let counter,value;
        let middleValue=Math.floor(this.length/2)
        if(index>middleValue){
            let counter=item.length-index
            let value=this.tail
            while(counter>0){
                value=value.prev
                counter--
            }
        }
        else{
            counter=0
            value=this.head
            
            while(counter<index){
                value=value.next
                counter++  
                }
        }   
    return value
    }
    set(index,value){
        let item=this.get(index)
        if(item){
            item.val=value
            return item
        }
         
        return false
        
    }


    
}
const doubleList=new DoublyLinkedLists()

doubleList.push(4)
doubleList.push(5)
doubleList.push(6)
doubleList.push(7)
doubleList.push(8)
doubleList.push(9)
// console.log(doubleList.length)
doubleList.pop()
// console.log(doubleList)
doubleList.pop()
// console.log(doubleList.head.val)
// console.log(doubleList.length)
// console.log(doubleList.get(1))
doubleList.set(1,17)
console.log(doubleList.get(1))