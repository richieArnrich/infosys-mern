import React from "react";
import Function3 from "./Function3";

function Function2(props) {
  const { appData } = props;
  return (
    <div>
      <h1>I am function 2</h1>
      <p>I am called inside function1</p>
      <hr />
      <Function3 func1Data={appData} />
    </div>
  );
}

export default Function2;
