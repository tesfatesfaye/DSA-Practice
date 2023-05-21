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
class stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
}