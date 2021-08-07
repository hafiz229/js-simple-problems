function largestElement(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

const arrayList = [-44, -23, -54, -83, -15, -5, -78];
const arrayLargest = largestElement(arrayList);

console.log(arrayLargest);
