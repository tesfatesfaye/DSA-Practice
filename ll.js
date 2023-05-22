let obj={one:1,two:2}
const lo=(l=obj)=>{
    l.one=5
    console.log(l)
    console.log(obj.one)
}
lo()