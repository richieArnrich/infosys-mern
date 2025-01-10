function add(a, b) {
  let r = a + b;
  console.log(r);
}

function sub(a, b) {
  let r = a - b;
  console.log(r);
}

function multiply(a, b) {
  let r = a * b;
  console.log(r);
}

// export functions from one file to another
module.exports = { add, sub, multiply };

// module is a set of code written in order to be reused
