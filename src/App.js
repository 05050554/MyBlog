import React, { useContext } from "react";
import Introduction from "./components/Introduction/Introduction";
import { ThemeContext } from "./GlobalTheme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
   
    <div
      className="App"
      style={{
        color: theme.foreground,
        backgroundColor: theme.background,
      }}
    >
      <Introduction />
   
    </div>

  );
}

export default App;
