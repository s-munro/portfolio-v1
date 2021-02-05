import React from "react";
import gif from "../../assets/easyscore-giphy-demo.gif";

const EasyScoreSection = () => {
  return (
    <div className="row w-100 bottom-margin-twenty">
      <div
        id="easy-score"
        className="col-12 d-flex flex-column align-items-center justify-content-center mb-5"
      >
        <h2 className="project-heading">The Easy Score</h2>
        <h6>An advanced course-planning resource for college students</h6>
      </div>
      <div className="col-4 d-flex flex-column align-items-start justify-content-center">
        <p className="stat-title">Lead Developer</p>
        <p className="stat">
          Organized and implemented site design and development
        </p>
        <p className="stat">React, Redux, Node.js</p>
        <p className="stat">Material-UI, Chart.js, Fuse.js, Nodemailer</p>
        <p className="stat-center">
          <a
            href="https://github.com/s-munro/easyscore"
            className="stat-link animated-underline-3 underline-base"
          >
            Github
          </a>
          <span className="secondary"> | </span>
          <a
            href="https://the-easy-score.herokuapp.com/"
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

export default EasyScoreSection;
