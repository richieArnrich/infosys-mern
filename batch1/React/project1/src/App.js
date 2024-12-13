import "./App.css";
import MyFirstComp from "./components/MyFirstComp";
import MySecComp from "./components/MySecComp";
import Function1 from "./components/Function1";
function App() {
  // Parent Component
  const person = {
    name: "Sachin",
    age: 50,
    country: "India",
  };
  return (
    <div className="App">
      {/* <MyFirstComp name="Columbus" age="15" /> */}
      {/* Child Component */}
      {/* <MySecComp myObj={person} /> */}
      <Function1 Obj={person} />
    </div>
  );
}

export default App;
