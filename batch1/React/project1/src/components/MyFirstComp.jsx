// functional components
import React from "react";

function MyFirstComp(props) {
  console.log(props);
  console.log(props.name);
  console.log(props.age);
  return (
    <div>
      <h1>My First Component</h1>
      <p>My name is {props.name}</p>
      <p>My age is {props.age}</p>
    </div>
  );
}

export default MyFirstComp;
// JSX : JavaScript and XML ; When a JS function returns an HTML element
// JSX is a syntax extension for JavaScript. It allows you to write HTML in your JavaScript files.
// JSX is not a separate language, but a syntax extension for JavaScript. It is used with React
