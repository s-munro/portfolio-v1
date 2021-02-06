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
    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 d-flex flex-column align-items-start justify-content-center">
      <p className="stat-title">{role}</p>
      <p className="stat mb-2">{duties}</p>
      <p className="stat mb-2">{stat1}</p>
      <p className="stat">{stat2}</p>
      <p className="stat-center mb-0">
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
      {showCaseStudy ? (
        <p className="stat-title">
          <a href={caseStudyUrl} className="link-primary-color">
            <span className="secondary animated-underline-2 underline-base pseudo-link">
              View
            </span>{" "}
            Full Case Study
          </a>
        </p>
      ) : (
        <p className="stat-title faded">Case study unavailable.</p>
      )}
    </div>
  );
};

export default Description;
