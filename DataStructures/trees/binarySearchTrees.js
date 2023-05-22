class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
        }
        else {
            let node = this.root

            while (true) {
                if (node.val > value) {
                    if (node.left !== null) {
                        node = node.left
                    }
                    else {
                        node.left = newNode
                        break;
                    }
                }

                else if (node.val < value) {
                    if (node.right !== null) {
                        node = node.right
                    }
                    else {
                        node.right = newNode
                        break;
                    }
                }
                else {
                    return undefined
                }
            }
        }
        return this

    }
    find(value) {
        let node = this.root
            while(node) {
                if(node.val===value){
                    return true
                }
                else if(node.val < value){
                    node=node.right
                }
                else {
                    node=node.left
                }
            }
            return false
    }


}

let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(4)
tree.insert(14)
tree.insert(16)
tree.insert(7)
tree.insert(3)
// console.log(tree.root.left.left.right.left)
console.log(tree.find(255))


// recursive insert works but still has some kinks
   // insert(value, node) {
    //     if (node === undefined) {
    //         if (this.root === null) {
    //             this.root = new Node(value)
    //             return this
    //         }
    //         node = this.root
    //     }

    //     if (node.val > value) {
    //         if (node.left === null) {
    //             node.left = new Node(value)
               
               
    //         }
    //         else{
    //             node = node.left
    //             this.insert(value, node)
    //         }
           
    //     }
    //     else if (node.val === value) {
    //         return undefined
    //     }
    //     else {
    //         if (node.val < value) {
    //             if (node.right === null) {
    //                 node.right = new Node(value)
                    
               
    //             }
    //             else{
    //                 node = node.right
    //                 this.insert(value, node)
    //             }
             
    //         }
    //     }

    //         return this

    // }