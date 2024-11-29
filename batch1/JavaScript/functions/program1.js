// function definition
function myFunctionDef() {
  document.write("I am a non-parameterised function<br>");
}

myFunctionDef();

function myFunctionDefPara(myinput) {
  document.write("I am printing the data I got: " + myinput + "<br>");
}
myFunctionDefPara("Ricky");
myFunctionDefPara(1997632);
myFunctionDefPara("Amitabh Bachchan");
document.write("<br>----------------------------------------<br>");
// -------------------------------------------------
// anonymous functions
// anonymous functions are functions without a name
let myAnonFunc = function () {
  document.write("I am an anonymous function<br>");
};

myAnonFunc();

let myAnonFuncPara = function (myParameter) {
  document.write(
    "I am an anonymous function with a parameter: " + myParameter + "<br>"
  );
};
myAnonFuncPara("Grizzly Bear");
myAnonFuncPara("Polar Bear");
myAnonFuncPara(404.43);
myAnonFuncPara(true);
document.write("<br>----------------------------------------<br>");
// -------------------------------------------------
// arrow functions
// arrow functions are functions without a name and function keyword
// they are used to create small functions
let arrowFunc = () => {
  document.write("I am an arrow function<br>");
};
arrowFunc();
let myArrowFuncPara = (n1, n2) => {
  document.write(
    "I am an arrow function with two parameters: " + n1 + " and " + n2 + "<br>"
  );
};
myArrowFuncPara(1500, 300);
document.write("<br>----------------------------------------<br>");
// -------------------------------------------------
// IIFEE functions
// IIFEE stands for Immediately Invoked Function Expression
// they are used to create a function that runs immediately after it is defined
// they are used to create a scope for the variables used inside the function

let iifee = (function () {
  document.write("I am an IIFEE function expression");
})();

console.log("I am on the console");
console.log(window);
