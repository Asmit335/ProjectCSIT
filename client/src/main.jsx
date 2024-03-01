import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProviderContext from "./context/CartContextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProviderContext>
      <App />
    </CartProviderContext>
  </React.StrictMode>
);
