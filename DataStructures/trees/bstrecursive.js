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
            return this
        }
        
        
        const helper = (value, node=this.root) => {
            if (node.val > value) {
                if (node.left === null) {
                    node.left = newNode
                   
                }
                else {
                   return(helper(value, node.left))
                }

            }
            else if (node.val === value) {
                return undefined
            }
            else {
                if (node.right === null) {
                    node.right = newNode
                    
                }
                else {
                    return(helper(value, node.right))
                }
            }
            return this
        }
       
       
        return  (helper(value, this.root))

    }
    find(value,node=this.root) {
        if(node===null){
             return false
            }
            
            if (node.val === value) {
                return true
            }
            else if (node.val < value) {
               return(this.find(value,node.right))
            }
            else {
                return (this.find(value, node.left))
            }
        
        
    }


}

let tree = new BinarySearchTree();
console.log(tree.insert(11))
console.log(tree.insert(10))
tree.insert(9)
console.log(tree.insert(13))
console.log(tree.insert(12))
console.log(tree.insert(12))
console.log(tree.find(13))
