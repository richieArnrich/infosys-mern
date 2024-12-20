import "./App.css";
import MyFirstComp from "./components/MyFirstComp";
import MySecComp from "./components/MySecComp";
import Function1 from "./components/Function1";
import ClassComp from "./components/ClassComp";
import ChangeState from "./components/ChangeState";
import ToggleState from "./components/ToggleState";
import ToggleState2 from "./components/ToggleState2";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import ProfileRoutes from "./components/ProfileRoutes";
function App() {
  // Parent Component
  // const person = {
  //   name: "Sachin",
  //   age: 50,
  //   country: "India",
  // };
  return (
    <div className="App">
      {/* <MyFirstComp name="Columbus" age="15" /> */}
      {/* Child Component */}
      {/* <MySecComp myObj={person} /> */}
      {/* <Function1 Obj={person} /> */}
      {/* <ClassComp /> */}
      {/* <hr /> */}
      {/* <ChangeState /> */}
      {/* <hr /> */}
      {/* <ToggleState /> */}
      {/* <hr /> */}
      {/* <ToggleState2 /> */}
      {/* <hr /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      <ProfileRoutes />
    </div>
  );
}

export default App;
