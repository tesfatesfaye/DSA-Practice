
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
}





