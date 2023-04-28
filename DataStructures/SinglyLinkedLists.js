// node stores data and store a reference

class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

let first=new Node("Hi")
first.next=new Node("there")
first.next.next=new Node("there two")
first.next.next.next=new Node("there three")
console.log(first.next)