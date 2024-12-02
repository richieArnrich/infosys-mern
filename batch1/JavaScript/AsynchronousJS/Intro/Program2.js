let data;
function MyFunction1(callFunc) {
  // assigns value to data
  setTimeout(() => {
    data = { name: "Sachin", age: 50, occupation: "Cricketer" };
    callFunc();
  }, 1000);
}

function MyFunction2() {
  // display the data
  console.log(
    `Name is ${data.name} and age ${data.age} and occupation is ${data.occupation}`
  );
}

function MyFunction3() {
  console.log(
    `Name is ${data.name} and age ${data.age} and occupation is ${data.occupation}`
  );
}

MyFunction1(MyFunction2);
MyFunction1(MyFunction3);
// the function passed as a parameter to another function is called as callback function
