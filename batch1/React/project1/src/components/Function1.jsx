import React from "react";
import Function2 from "./Function2";
function Function1(props) {
  const { Obj } = props;
  return (
    <div>
      <h1>Function 1 Component</h1>
      <p>Function 1 is called in App and is accessing props</p>
      <hr />
      <Function2 appData={Obj} />
    </div>
  );
}

export default Function1;
