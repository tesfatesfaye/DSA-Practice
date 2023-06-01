// queues with arrays
//queues espouse the principal first in first out
const queuesArray=[]
// we could either do unshift + pop or we could either do shift + push
queuesArray.push(0)
queuesArray.push(1)
queuesArray.push(2)
queuesArray.push(3)
//after adding via push we remove using shift
queuesArray.shift()
queuesArray.shift()
queuesArray.shift()
queuesArray.shift()

const queuesArrayTwo=[]
// we do the same thing the other way around
queuesArray.unshift(0)
queuesArray.unshift(1)
queuesArray.unshift(2)
queuesArray.unshift(3)
// removing the inserted values
queuesArray.pop()
queuesArray.pop()
queuesArray.pop()
queuesArray.pop()




//proper queue
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
       
            return ++this.size;

    }
    }
   

const queueClass=new Queue()
queueClass.enqueue(1)
queueClass.enqueue(2)
queueClass.enqueue(3)
console.log(queueClass)
queueClass.dequeue()
console.log(queueClass)


// we can set up a queue without need a second node to hold the head and the tail, a bit more cluncky but it shall do


class QueueTwo{
    constructor(val,next){
        this.val=val
        this.next=next
        
    }
    unshift(value){
            let oldNodeValue=new QueueTwo(this.val,this.next)
            this.val=value
            this.next=oldNodeValue
            return this       
    }
    shift(){
            if(this.val===null) return null
            let OldNode=this.val
            if(this.next!==null){
                this.val=this.next.val
                this.next=this.next.next
            }
            else{
                this.val=null
            }
           
            return OldNode
    }

        

}

let p=new QueueTwo(2)
console.log(p)
p.unshift(3)
p.unshift(6)
p.unshift(7)
p.shift()
console.log(p)





