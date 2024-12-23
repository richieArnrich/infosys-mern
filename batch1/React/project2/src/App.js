import logo from "./logo.svg";
import "./App.css";
import CompA from "./components/CompA";
import Display from "./components/Display";
import { UserProvider } from "./components/Context";
import Display2 from "./components/Display2";
import { ThemeProvider } from "./components/ThemeContext";
import ToggleTheme from "./components/ToggleTheme";
function App() {
  return (
    <div>
      {/* <UserProvider> */}
      {/* <div> */}
      {/* <CompA /> */}
      {/* <Display />
          <Display2 /> */}
      {/* </div> */}
      {/* </UserProvider> */}
      <ThemeProvider>
        <ToggleTheme></ToggleTheme>
      </ThemeProvider>
    </div>
  );
}

export default App;
