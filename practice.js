class Node{
  constructor(){
    this.keys= new Map()
    this.end=false;
   }
   setEnd(){
    this.end=true
   }

}

class Trie{
  constructor(){
    this.root=new Node();
  }
}