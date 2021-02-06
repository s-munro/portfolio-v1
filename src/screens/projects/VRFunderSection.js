import React from "react";
import gif from "../../assets/vr-funder-demo.gif";

const VRFunderSection = () => {
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
          VR-Funder
        </h2>
        <h6 data-aos="fade-right" data-aos-delay="150" data-aos-duration="500">
          A VR Funding platform for fundraisers to list startups and funders to
          browse/fund
        </h6>
      </div>
      <div className="col-4 d-flex flex-column align-items-start justify-content-center">
        <p className="stat-title">Front-End Developer</p>
        <p className="stat">
          Developed/Implemented private routing, CRUD operations, global state,
          validation
        </p>
        <p className="stat">React, Redux</p>
        <p className="stat">Ant Design</p>
        <p className="stat-center">
          <a
            href="https://github.com/s-munro/vr-funding-app"
            className="stat-link animated-underline-3 underline-base"
          >
            Github
          </a>
          <span className="secondary"> | </span>
          <a
            href="https://vr-funding-app-qkmvkhqyf.vercel.app/login"
            className="stat-link animated-underline-3 underline-base"
          >
            Demo
          </a>
        </p>
        <br />
        <h5>
          <span className="secondary animated-underline-2 underline-base pseudo-link">
            View
          </span>{" "}
          Full Case Study
        </h5>
      </div>
      <div className="col-8 d-flex align-items-center justify-content-center">
        <div className="gif">
          <img width="600px" src={gif} alt="easyscore gif" />
        </div>
      </div>
    </div>
  );
};

export default VRFunderSection;
