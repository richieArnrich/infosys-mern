function add(a, b, cb1) {
  setTimeout(() => {
    let r = a + b;
    cb1(r);
  }, 1000);
}

function sub(addresult, b, cb2) {
  setTimeout(() => {
    let r = addresult - b;
    cb2(r);
  }, 1000);
}

function multiply(subresult, b, cb3) {
  setTimeout(() => {
    let r = subresult * b;
    cb3(r);
  }, 1000);
}
add(10, 5, (r) => {
  console.log("Add result = ", r);
  sub(r, 3, (r) => {
    console.log("sub result = ", r);
    multiply(r, 5, (r) => {
      console.log("multiply result = ", r);
    });
  });
});

// nested callbacks --> callback hell
// nested callbacks which lead to pyramid like structure of code
