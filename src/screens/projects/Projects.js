import React from "react";
import Hero from "./Hero";
import ProjectGallery from "./ProjectGallery";
import AOS from "aos";
import ContactCTA from "./ContactCTA";
AOS.init({
  anchorPlacement: "bottom-bottom",
});

const Projects = () => {
  return (
    <>
      <div className="container">
        <div className="row w-100 d-flex flex-column align-items-center justify-content-center projects-container mt-5">
          <div className="col-12 hero-container d-flex align-items-center hero-container">
            <Hero />
          </div>
          <ProjectGallery />
        </div>
      </div>
      <div className="container-fluid d-flex flex-column align-items-center justify-content-center pr-0 pl-0">
        <ContactCTA />
      </div>
    </>
  );
};

export default Projects;
