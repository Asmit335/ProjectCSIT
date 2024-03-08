import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextState from "../../client/src/context/ContextState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextState>
      <App />
    </ContextState>
  </React.StrictMode>
);
