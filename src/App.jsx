import React from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/Layouts/Layout";
import Doc from "./views/Doc";
import Home from "./views/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/doc/:id" element={<Doc />} />
      </Route>
    </Routes>
  );
};

export default App;
