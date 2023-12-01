
class NestedIterator {
  constructor(nestedList) {
    this.nestedList = this.flatten(nestedList);
    this.index = 0;
  }

flatten = (inputArray) => {
  let flat=[]
    for (let i of inputArray) {
    if (i.isInteger()===null) {
      flat.push(...flat,i.getList())
    } else {
      flat.push(i.getInteger())
    }
  }
  return flat;
}

  hasNext() {
    if (this.index < this.nestedList.length) return true;
    return false;
  }


  next() {
    if (this.hasNext) {
      let value = this.nestedList[this.index];
      this.index++;
      return value;
    }
  }
}

const nestedList = [[1, 1], 2, [1, 1]];
var i = new NestedIterator(nestedList), a = [];
 while (i.hasNext()) a.push(i.next());
 console.log(a)