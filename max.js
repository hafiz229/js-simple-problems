// Maximum of three numbers
function findLargest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// Minimum of three numbers
function findSmallest(num1, num2, num3) {
  if (num1 <= num2 && num1 <= num3) {
    return num1;
  } else if (num2 <= num1 && num2 <= num3) {
    return num2;
  } else {
    return num3;
  }
}

// Three numbers
const first = 450;
const second = 450;
const third = 350;

// function calls
let largest = findLargest(first, second, third);
let smallest = findSmallest(first, second, third);

// output
console.log(largest, "is the largest");
console.log(smallest, "is the smallest");

// Max of two
// first system
// if (first > second) {
//   console.log(first, "is bigger");
// } else {
//   console.log(second, "is bigger");
// }

// Max of three
// if (first > second && first > third) {
//   console.log(first, "is bigger");
// } else if (second > first && second > third) {
//   console.log(second, "is bigger");
// } else {
//   console.log(third, "is bigger");
// }

// let max = Math.max(first, second, third);
// console.log(max, "is largest among", first, second, third);
