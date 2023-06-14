
// this needs work to be optimized
// const getMinimumDifference = (root) => {
//     let arr=[]
//     let node=root
//     let difference=Number.POSITIVE_INFINITY
//     if(node.left===null&&node.right===null) return 0
//     const traverse=(currentNode)=>{
//         if(currentNode.left) traverse(currentNode.left)
//         arr.push(currentNode.val)
//         if(currentNode.right)traverse (currentNode.right)
//     }
//     traverse(root)
    
//         for(let i=0;i<arr.length-1;i++){
//             difference=Math.min((arr[i+1]-arr[i]),difference)
//         }
//         console.log(arr)
//     return difference
// };

const getMinimumDifference =(root)=> {
    // you mostly get it but you need some work on it

    
    const traverse=(currentNode)=>{
       if(!currentNode) return null
       traverse(currentNode.left)
        if(previousNode){
            minDifference=Math.min(currentNode.val-previousNode.val,minDifference)
        }
            previousNode=currentNode
        traverse (currentNode.right)
    }
    let previousNode=null
    let minDifference=Infinity
    traverse(root)
    
       
    return minDifference
};

