import React from "react";
import { RoutesItems } from "./components/RoutesItems";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RoutesItems />
    </BrowserRouter>
  );
}

export default App;
