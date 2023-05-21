// queues with arrays
//queues espouse the principal first in first out
const queuesArray=[]
// we could either do unshift + pop or we could either do shift + push
queuesArray.push(0)
queuesArray.push(1)
queuesArray.push(2)
queuesArray.push(3)
//after adding via push we remove using shift
queuesArray.shift()
queuesArray.shift()
queuesArray.shift()
queuesArray.shift()

const queuesArrayTwo=[]
// we do the same thing the other way around
queuesArray.unshift(0)
queuesArray.unshift(1)
queuesArray.unshift(2)
queuesArray.unshift(3)
// removing the inserted values
queuesArray.pop()
queuesArray.pop()
queuesArray.pop()
queuesArray.pop()






