// how to access state inside a react functional component

import React, { useState } from "react";

function UseState() {
  // declare a state variable
  const [count, setCount] = useState(0);

  const [color, setColor] = useState("red");

  function increment() {
    setCount(count + 1);
  }
  function changeColor() {
    setColor("blue");
  }

  return (
    <div>
      <h1>UseState function in React</h1>
      <p>I have clicked {count} times</p>
      <p>my favorite color is: {color}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default UseState;
