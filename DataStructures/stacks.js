//Array implementation example
const arrayStack=[]
arrayStack.push('valueOne')
arrayStack.push('valueTwo')
arrayStack.push('valueThree')
arrayStack.push('valueFour')
arrayStack.push('valueFive')
arrayStack.pop()
arrayStack.pop()
arrayStack.push("hello")
arrayStack.pop() // removes and returns hello
// a second implementation
const arrayStackTwo=[]
arrayStackTwo.unshift('valueOne')
arrayStackTwo.unshift('valueTwo')
arrayStackTwo.unshift('valueThere')
arrayStackTwo.unshift('valueFour')
arrayStackTwo.shift()// removes "value four" and returns it

// linked list stack
class Node {
    constructor(val){
        this.val=val
        this.next=null
    }
}
class Stack{ //since push and pop have to be O(1) time we will use shift and unshift albeit with their names changed appropriately 
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }

        pop(){
            if(this.size===0) return undefined
            let oldNode=this.first
            this.first=oldNode.next
           this.size --
                if(this.size===0){
                    this.last=null
                }
            return oldNode

        }
        push(val){
            let newNode=new Node(val)
            if(this.size===0){
               this.first=newNode
                this.last=newNode
                }
                else{
                    newNode.next=this.first
                    this.first=newNode
                }
              
                return  ++ this.size

        }
        
}
const stackExample=new Stack()
stackExample.push(12)
stackExample.push(11)
stackExample.push(2)
stackExample.pop()
