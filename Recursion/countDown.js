const countDown=(num)=>{
if(typeof(num)!=="number") return "please put in number"
 if(num<=0){
    return "all done"
}
    console.log(num)
    num--
    countDown(num)

}

countDown(7)