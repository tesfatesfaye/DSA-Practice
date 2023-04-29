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

}

let list=new SinglyLinkedList()
// list.push("Hi")
// console.log(list.push("GoodBye"))
// console.log(list.push("how is your day"))

list.push("Hi")
list.push("You")
list.push(99)
console.log(list.head.next)
console.log(list)