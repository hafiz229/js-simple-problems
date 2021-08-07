let first = 5;
let second = 7;
console.log(first, second);

// first approach
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// desctructuring
[first, second] = [second, first];
console.log(first, second);
