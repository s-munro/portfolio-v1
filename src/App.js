import React from "react";
import Nav from "./g-components/Nav";
import Home from "./screens/home/Home";
import Projects from "./screens/projects/Projects";
import Contact from "./screens/contact/Contact";
import AOS from "aos";

import { Route, Switch } from "react-router-dom";
import "aos/dist/aos.css";
import "./App.css";

AOS.init();

const App = () => {
  return (
    <>
      <div className="container">
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
};

export default App;
