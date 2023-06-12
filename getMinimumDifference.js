var getMinimumDifference = function(root) {

    let node=root
    let difference=Number.POSITIVE_INFINITY
    if(node.left===null&&node.right===null) return 0
    const traverse=(current,previous=null)=>{
       
        if(current.left) traverse(current.left,current)
        if(previous){
            difference=Math.min(current.val-previous.val)
        }
       
        if(current.right)traverse (current.right)
    }
    traverse(root)
    
        for(let i=0;i<arr.length-1;i++){
            difference=Math.min((arr[i+1]-arr[i]),difference)
        }
        console.log(arr)
    return difference
};