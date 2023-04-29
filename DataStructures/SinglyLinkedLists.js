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
                   this.length=this.length-1
                   if(this.length===0){
                    this.head=null
                    this.tail=null
                   }
                    return current
                }


}

let list=new SinglyLinkedList()
list.push("Hi")
list.push("You")
list.push(99)
list.push("sami")
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list.pop())
console.log(list)
console.log(list.pop())

