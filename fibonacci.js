// Fibonacci Series
function fibonacci(num) {
  if (typeof num != "number") {
    return "Please give a number";
  }
  if (num < 2) {
    return "Input must be greater than 1";
  }
  const fibo = [0, 1];
  if (num == 0 || num == 1) {
    return fibo;
  } else {
    for (let i = 2; i < num; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
  }
}

const totalSequence = fibonacci(11);
console.log(totalSequence);
