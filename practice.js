
class Node {
    constructor(val){
        this.val=val
        this.next=null
    }
}
class Queue{ //since push and pop have to be O(1) time we will use shift and unshift albeit with their names changed appropriately 
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    dequeue(){
        if(!this.first) return undefined
        let current=this.first
        let newLast=this.first
        while(current.next){
            newLast=current
            current=current.next
        }
           this.last=newLast;
           this.last.next=null
           this.length--
           if(this.length===0){
            this.first=null
            this.last=null
           }
            return current
        }

        enqueue(value){
               
            let newNode=new Node(value)
            if(!this.first){
                this.first=newNode
                this.last=this.first
               
                
            }
            else{
                newNode.next=this.first
                this.first=newNode

            }
           
            this.length++
            return this
    }
    }





