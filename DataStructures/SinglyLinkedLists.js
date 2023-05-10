// node stores data and store a reference

class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}


class SinglyLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.length=0
    }
    push(val){
        let newNode=new Node(val)
        if(this.head===null){
            this.head=newNode
            this.tail=newNode
            this.length=1
        }
        else {
            this.tail.next=newNode
            this.tail=newNode
            this.length=this.length+1
        }
        this.length=this.length++
            return this;

    }

        pop(){
                if(!this.head) return undefined
                let current=this.head
                let newTail=this.head
                while(current.next){
                    newTail=current
                    current=current.next
                }
                   this.tail=newTail;
                   this.tail.next=null
                   this.length--
                   if(this.length===0){
                    this.head=null
                    this.tail=null
                   }
                    return current
                }

        shift(){
            if(!this.head)return undefined
            let current=this.head
            this.head=current.next
            this.length--
            if(this.length===0){
                 this.tail=null
            }
            return current
        }
      
        unshift(value){
               
            let newNode=new Node(value)
            if(!this.head){
                this.head=newNode
                this.tail=this.head
               
                
            }
            else{
                newNode.next=this.head
                this.head=newNode

            }
           
            this.length++
            return this
    }
            
        get(index){
            if(index<0 || index>this.length-1) return undefined
            if(!this.head) return undefined
            let value=this.head
            while(index>0){
                value=value.next
                
                index--
            }
            return value

        }
    set(index,value){
        let item=this.get(index)
            if(item){
                item.val=value
                return true
            }
          
           return false
    }

    insert(index,value){
        if(index===this.length) return this.push(value)
            
        if(index>this.length || index<0) return false
        if(index===0) return !! this.unshift(value)
        
        
            let tempNode=this.get(index-1)
            let newNode=new Node(value)
            newNode.next=tempNode.next
            tempNode.next=newNode
            this.length++
            return true
        
        
    }

    remove(index){
        if(index===0) return this.shift()
        if(index===index.length-1) return this.pop()
        if(index<0 || index > this.length-1) return undefined
       
            let previousNode=this.get(index-1)
            let removedNode=previousNode.next
            previousNode.next=removedNode.next
            this.length --
            return removedNode           


        
       
    }

    print(){
        let currentNode=this.head
        let arr=[]
        while(currentNode){
            arr.push(currentNode.val)
            currentNode=currentNode.next
        }
        console.log(arr)
    }

    reverse(){
        let node=this.head;
        this.head=this.tail;
        this.tail=this.head;
        let next;
        let prev=null
        for(let i=0;i<this.length;i++){
            next=node.next;
            node.next=prev;
            prev=node
            node=next
        }

    }

}


let list=new SinglyLinkedList()
let hello={1:"2",2:"4"}
list.push(100)
list.push(201)
list.push(245)
list.push(1)
list.push(250)
list.push(350)
list.push(999)
list.print()
list.reverse()
list.print()
let node=new Node(11)
console.log(node.val)






