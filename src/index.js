import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalTheme from "./GlobalTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalTheme>
      <App />
    </GlobalTheme>
  </React.StrictMode>
);
