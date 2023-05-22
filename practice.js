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
        let node = this.root
        let duplicate=false
        const helper = (value, node) => {
            if (node.val > value) {
                if (node.left === null) {
                    node.left = newNode
                   
                }
                else {
                    helper(value, node.left)
                }

            }
            else if (node.val === value) {
                duplicate=true
            }
            else {
                if (node.right === null) {
                    node.right = newNode
                   
                }
                else {
                    helper(value, node.right)
                }
            }
          
        }
        let helped=helper(value, node)
       
        return (duplicate ? undefined : this)

    }
    find(value) {
        let node = this.root
        while (node) {
            if (node.val === value) {
                return true
            }
            else if (node.val < value) {
                node = node.right
            }
            else {
                node = node.left
            }
        }
        return false
    }


}

let tree = new BinarySearchTree();
tree.insert(11)
tree.insert(10)
tree.insert(9)
tree.insert(13)
tree.insert(12)
tree.insert(12)
console.log(tree.insert(19))
console.log(tree.root.right)
