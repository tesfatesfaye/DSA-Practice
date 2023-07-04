var isValidBST = function(root) {
    let node=root
    let array=[]
    const helper=(curr)=>{
        if(curr.left)helper(curr.left)  
        array.push(curr.val)

        if(curr.right)helper(curr.right)
       }
       helper(node)
       for(let i=0;i<array.length-1;i++){
           if(array[i]>=array[i+1])return false
       }
    return true

};