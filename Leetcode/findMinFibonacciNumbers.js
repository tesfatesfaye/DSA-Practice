function findMinFibonacciNumbers(k) {
  let fibs = [1, 1];
  // Step 1: Generate the Fibonacci sequence
  while (fibs[fibs.length - 1] < k) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }

  let count = 0;
  for (let i = fibs.length - 1; i >= 0 && k > 0; --i) {
    // Step 2: Backtrack
    if (fibs[i] <= k) {
      k -= fibs[i];
      count++; // Step 3: Increment count
    }
  }

  return count;
}

console.log(findMinFibonacciNumbers(5));
