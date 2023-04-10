const countDown=(num)=>{
if(typeof(num)!=="number") return "please input a number"
 if(num<=0){
    return "all done"
}
    console.log(num)
    num--
    countDown(num)

}

countDown(3)