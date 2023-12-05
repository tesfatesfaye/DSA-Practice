var largestGoodInteger = function (num) {
  let maxValue = -Infinity;
  let value = "";

  for (let i = 0; i < num.length; i++) {
    if (num[i] === value[0]) {
      value += num[i];
      if (value.length === 3) {
        if (value > maxValue) maxValue = value;
        value = "";
      }
    } else {
      value = num[i];
    }
  }

  return maxValue !== -Infinity ? maxValue : "";
};

console.log(largestGoodInteger("42352338"));
