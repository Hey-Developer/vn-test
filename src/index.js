import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllContextProvider from "./Global/Providers/AllContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AllContextProvider>
      <App />
    </AllContextProvider>
  </React.StrictMode>
);
