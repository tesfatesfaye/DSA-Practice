
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
 
    dequeue(){ // unshift
        if(!this.first)return undefined
        let current=this.first
        this.first=current.next
        this.size--
        if(this.size===0){
             this.last=null
        }
        return current
    }
    //enqueue
    enqueue(val){
        let newNode=new Node(val)
        if(this.first===null){
            this.first=newNode
            this.last=newNode
           
        }
        else {
            this.last.next=newNode
            this.last=newNode
          
        }
        this.size=this.size++
            return this;

    }
    }





