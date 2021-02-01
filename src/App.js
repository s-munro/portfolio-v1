import React from "react";
import Nav from "./g-components/Nav";
import Home from "./screens/home/Home";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Home />
    </div>
  );
};

export default App;
