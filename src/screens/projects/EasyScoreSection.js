import React from "react";
import gif from "../../assets/The EasyScore.gif";

const EasyScoreSection = () => {
  return (
    <div className="row w-100 bottom-margin-twenty">
      <div
        id="easy-score"
        className="col-12 d-flex justify-content-center mb-5"
      >
        <h2 className="project-heading">The Easy Score</h2>
      </div>
      <div className="col-4 d-flex flex-column align-items-center justify-content-center">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <br />
        <h5>View Full Case Study</h5>
      </div>
      <div className="col-8 d-flex align-items-center justify-content-center">
        <img src={gif} alt="easyscore gif" />
      </div>
    </div>
  );
};

export default EasyScoreSection;
