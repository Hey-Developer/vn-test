import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AllContextProvider from "./global/Providers/AllContextProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AllContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
