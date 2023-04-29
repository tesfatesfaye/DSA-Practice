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
            return list
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

}

let list=new SinglyLinkedList()
list.push("Hi")
list.push("You")
list.push(99)
list.push("sami")
list.unshift("Tes")
console.log(list.get(12))




