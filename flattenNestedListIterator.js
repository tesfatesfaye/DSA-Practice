
class NestedIterator {
  constructor(nestedList) {
    this.nestedList = this.flatten(nestedList);
    this.index = 0;
  }
  getList() {
    let value = this.nestedList[this.index];
    this.index++;
    return value;
  }
  getInteger(item) {
    return this.isInteger(item) ? item : null;
  }
  isInteger(value) {
    return typeof value === "number";
  }
  flatten = (inputArray, flat = []) => {
    for (let i of inputArray) {
      if (i.isInteger() === false) {
        this.flatten(i.getList(), flat);
      } else {
        flat.push(i.getInteger());
      }
    }
    return flat;
  };

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

const nestedList = [new NestedIterator([1, 1]), new NestedIterator([2]), new NestedIterator([1, 1])];
// var i = new NestedIterator(nestedList), a = [];
//  while (i.hasNext()) a.push(i.next());
 console.log(nestedList)