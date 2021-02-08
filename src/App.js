import React from "react";
import Nav from "./g-components/Nav";
import Home from "./screens/home/Home";
import Projects from "./screens/projects/Projects";
// import Contact from "./screens/contact/Contact";

import TheEasyScore from "./screens/case-studies/theeasyscore/TheEasyScore";
import VRFunder from "./screens/case-studies/vrfunder/VRFunder";
import HairStudios from "./screens/case-studies/hairstudios/HairStudios";
import AOS from "aos";

import { Route, Switch } from "react-router-dom";
import "aos/dist/aos.css";
import "./App.css";

AOS.init({ disable: "mobile" });

const App = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <Nav />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/contact" component={Contact} /> */}
        <Route path="/case-studies/the-easy-score" component={TheEasyScore} />
        <Route path="/case-studies/vr-funder" component={VRFunder} />
        <Route path="/case-studies/707-hair-studios" component={HairStudios} />
      </Switch>
    </>
  );
};

export default App;
