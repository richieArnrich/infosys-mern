import React from "react";

function MySecComp(props) {
  console.log(props);
  const { myObj } = props;
  return (
    <div>
      <h1>My Second Component</h1>
      <p>My name is : {props.myObj.name}</p>
      <p>My age is : {props.myObj.age}</p>
      <p>My country is : {props.myObj.country}</p>
      <hr />
      <p>My name is : {myObj.name}</p>
      <p>My age is : {myObj.age}</p>
      <p>My country is : {myObj.country}</p>
    </div>
  );
}

export default MySecComp;
