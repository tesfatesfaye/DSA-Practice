const getMinimumDifference =(root)=> {

    let difference=Number.POSITIVE_INFINITY
    if(root.left===null&&root.right===null) return 0
    const traverse=(current,previous=null)=>{
       
        if(current.left) traverse(current.left,current)
        if(previous){
            difference=Math.min(Math.abs(current.val-previous.val),difference)
        }
       
        if(current.right)traverse (current.right,current)
    }
    traverse(root)
    
       
    return difference
};