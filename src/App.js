import React, { useContext } from "react";
import Introduction from "./components/Introduction/Introduction";
import { ThemeContext } from "./GlobalTheme";
// import About from "./components/About/About";
import NavTabs from "./components/NavTabs";
function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div
        className="App"
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
      >
        <Introduction />
      </div>
      <div
        
        style={{
          color: theme.contaonForont,
          backgroundColor: theme.containBack,
        }}
      >
        <NavTabs/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
