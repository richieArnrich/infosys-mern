import React from "react";
import CompB from "./CompB";

function CompA() {
  return (
    <div>
      <h1>I am component A</h1>
      <CompB name="Anil" />
    </div>
  );
}

export default CompA;
