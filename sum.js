const numberList = [44, 23, 54, 83, 15, 5, 78];
// let sum = 0;
// for (let i = 0; i < numberList.length; i++) {
//   sum += numberList[i];
// }
// console.log(sum);

function arrayTotal(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const totalfirst = arrayTotal([44, 23, 54, 83, 15, 5, 78]);
const totalsecond = arrayTotal(numberList);
console.log(totalfirst, totalsecond);
