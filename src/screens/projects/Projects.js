import React from "react";
import Hero from "./Hero";
import ProjectGallery from "./ProjectGallery";
import AOS from "aos";
AOS.init({
  anchorPlacement: "bottom-bottom",
});

const Projects = () => {
  return (
    <div className="row w-100 d-flex flex-column align-items-center justify-content-center projects-container mt-5">
      <div className="col-12 hero-container d-flex align-items-center hero-container">
        <Hero />
      </div>
      <ProjectGallery />
    </div>
  );
};

export default Projects;
