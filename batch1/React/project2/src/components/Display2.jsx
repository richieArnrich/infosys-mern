import React from "react";
import { useUser } from "./Context";
function Display2() {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h1>Display2</h1>
      <p>Username : {user.username}</p>
      <p>Age : {user.age}</p>
    </div>
  );
}

export default Display2;
