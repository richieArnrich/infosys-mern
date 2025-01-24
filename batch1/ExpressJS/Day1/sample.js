const nos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20];

// find()
const reqdData = 25;
const myno = nos.find((n) => {
  if (n === reqdData) {
    return n;
  }
});

if (myno) {
  console.log(`The number ${reqdData} is found in the array`);
} else {
  console.log(`The number ${reqdData} is not found in the array`);
}
