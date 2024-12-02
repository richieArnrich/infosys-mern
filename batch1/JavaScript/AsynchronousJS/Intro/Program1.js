function MyFunction1() {
  console.log("i am in func1() but before the settimeout()");
  setTimeout(() => {
    for (let i = 1; i <= 1000; i++) {
      console.log("I am function 1 <br>" + i);
    }
  }, 0);
}

function MyFunction2() {
  console.log("I am function 2 <br>");
}

MyFunction1();
MyFunction2();
