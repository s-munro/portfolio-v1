import React from "react";
import gif from "../../assets/707-hair-studios-demo-gif.gif";

const HairStudiosSection = () => {
  return (
    <div className="row w-100 bottom-margin-twenty">
      <div
        id="easy-score"
        className="col-12 d-flex flex-column align-items-center justify-content-center mb-5"
      >
        <h2
          className="project-heading"
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="500"
          // data-aos-anchor-placement="center-center"
        >
          707 Hair Studios
        </h2>
        <h6 data-aos="fade-right" data-aos-delay="150" data-aos-duration="500">
          A trendy/modern Chicago-based hair salon
        </h6>
      </div>
      <div className="col-4 d-flex flex-column align-items-start justify-content-center">
        <p className="stat-title">Lead Developer/Designer</p>
        <p className="stat">
          Designed and Implemented WordPress site for the hair studio's
          rebranding campaign
        </p>
        <p className="stat">WordPress</p>
        <p className="stat">Elementor, Woocommerce</p>
        <p className="stat-center">
          <span className="secondary">| </span>
          <a
            href="https://707hairstudios.com/"
            className="stat-link animated-underline-3 underline-base"
          >
            Live Link
          </a>
        </p>
        <br />
        <h5>
          <span
            className="secondary animated-underline-2 underline-base pseudo-link"
            // id="trigger-up"
          >
            View
          </span>{" "}
          Full Case Study
        </h5>
      </div>
      <div className="col-8 d-flex align-items-center justify-content-center">
        <div className="gif">
          <img width="600px" src={gif} alt="707 hair studios demo gif" />
        </div>
      </div>
    </div>
  );
};

export default HairStudiosSection;
