import React from "react";
import Hero from "./Hero";
import AnimatedHeader from "./../../g-components/AnimatedHeader";
import AOS from "aos";
AOS.init({
  anchorPlacement: "bottom-bottom",
});

const Projects = () => {
  // const characters = ["P", "r", "o", "j", "e", "c", "t", "s"];

  return (
    <div className="row w-100 d-flex flex-column align-items-center justify-content-center projects-container">
      <div className="col-12 hero-container d-flex align-items-center">
        <Hero />
      </div>
    </div>
  );
};

export default Projects;
