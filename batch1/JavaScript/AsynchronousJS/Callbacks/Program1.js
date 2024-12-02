// add sub mul
// result of add -> sub -> mul
// result sub -> mul

function add(a, b, cb1) {
  let r = a + b; // 15+13
  console.log(r); //28
  cb1(r, 5, multiply);
}

function sub(addResult, b, cb2) {
  let r = addResult - b; //28-5
  console.log(r); //23
  cb2(r, 5);
}

function multiply(subResult, b) {
  let r = subResult * b; //23*5
  console.log(r); //115
}
add(15, 13, sub);
