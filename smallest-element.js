function smallestElement(numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

const arrayList = [-44, -23, -54, -83, -15, -5, -78];
const arraySmallest = smallestElement(arrayList);

console.log(arraySmallest);
