import React from "react";

function Function3(props) {
  console.log("props from func 3");
  console.log(props);
  const { func1Data } = props;
  return (
    <div>
      <h1>I am function3</h1>
      <p>I am called in Function 2</p>
      <p>I display the data given in app</p>
      <h4>
        Data given from app to func 3 is : {func1Data.name} , {func1Data.age}{" "}
        and {func1Data.country}
      </h4>
    </div>
  );
}

export default Function3;
