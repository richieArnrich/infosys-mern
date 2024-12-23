import React from "react";

function CompC(props) {
  console.log(props);
  return (
    <div>
      <h1>I am component C</h1>
      <p>Props: {props.name}</p>
    </div>
  );
}

export default CompC;
