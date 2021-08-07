const number = 333.2345;
// Math.floor
// Math.ceil
// Math.round

/* const random = Math.random();
const between10 = random * 10;
const rounded = Math.round(between10);
console.log(rounded); */

// Randomly pick from 100
const selected = [];
for (let i = 0; i < 10; i++) {
  const random = Math.random() * 100;
  const picked = Math.round(random);
  if (selected.indexOf(picked) == -1) {
    selected.push(picked);
  } else {
    console.log("duplicate found", selected, picked);
  }
}
console.log(selected);
