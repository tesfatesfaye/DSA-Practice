const flatten = (inputObj, flat = []) => {
  for (let i of inputObj) {
    if (Array.isArray(i)) {
      flatten(i, flat);
    } else {
      flat.push(i);
    }
  }
  return flat;
};

const flattenObj = (inputObj, parentKey = null, flatObj = {}) => {

  const keyGenerator = (parentKey, valueKey) =>
    parentKey ? `${parentKey}.${valueKey}` : valueKey;

  for (const keys in inputObj) {
    if (typeof inputObj[keys] === "object" && inputObj[keys] !== null) {
      const newParentKey = keyGenerator(parentKey, keys);
      flattenObj(inputObj[keys], newParentKey, flatObj);
    } else {
      const newKey = keyGenerator(parentKey, keys);
      flatObj[newKey] = inputObj[keys];
    }
  }
  return flatObj;
};

// let obj = { 1: "one", 2: "two", 3: "three" };
let test = {
  Key1: "1",
  Key2: { a: "2", b: "3", c: { d: { x: { y: "10" } }, e: "1" } },
  Key3: "3",
};
let m = flattenObj(test);
console.log(m);
