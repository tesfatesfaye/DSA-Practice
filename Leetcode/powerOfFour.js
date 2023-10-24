var isPowerOfFour = function (n) {
  let value = (Math.log(n) / Math.log(4)) % 1;
  return value === 0;
};
