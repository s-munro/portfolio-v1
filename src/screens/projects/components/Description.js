import React from "react";

const Description = (props) => {
  const {
    role,
    duties,
    stat1,
    stat2,
    githubLink,
    demoLink,
    caseStudyUrl,
    live,
    showCaseStudy,
  } = props;
  return (
    <div className="col-4 d-flex flex-column align-items-start justify-content-center">
      <p className="stat-title">{role}</p>
      <p className="stat">{duties}</p>
      <p className="stat">{stat1}</p>
      <p className="stat">{stat2}</p>
      <p className="stat-center">
        {githubLink ? (
          <>
            <a
              href={githubLink}
              className="stat-link animated-underline-3 underline-base"
            >
              Github
            </a>
            <span className="secondary"> | </span>
          </>
        ) : (
          <span className="secondary">| </span>
        )}
        <a
          href={demoLink}
          className="stat-link animated-underline-3 underline-base"
        >
          {live ? "Live Link" : "Demo"}
        </a>
      </p>
      {/* <br /> */}
      {showCaseStudy ? (
        <h5>
          <a href={caseStudyUrl} className="link-primary-color">
            <span className="secondary animated-underline-2 underline-base pseudo-link">
              View
            </span>{" "}
            Full Case Study
          </a>
        </h5>
      ) : (
        <h5>
          {/* <a href={caseStudyUrl} className="link-primary-color"> */}
          Case study unavailable.
          {/* </a> */}
        </h5>
      )}
    </div>
  );
};

export default Description;
