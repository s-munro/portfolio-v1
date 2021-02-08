import React from "react";
import gif from "../../assets/vr-funder-demo.gif";

import Description from "./components/Description";

const VRFunderSection = () => {
  return (
    <div className="row w-100 bottom-margin-twenty" id="vr-funder">
      <div className="col-12 d-flex flex-column align-items-center justify-content-center mb-5">
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
      <Description
        role={"Front-End Developer"}
        duties={`Developed/Implemented private routing, CRUD operations, global state,
        validation`}
        stat1={"React, Redux"}
        stat2={"Ant Design"}
        githubLink={"https://github.com/s-munro/vr-funding-app"}
        demoLink={"https://vr-funding-app-qkmvkhqyf.vercel.app/login"}
        caseStudyUrl={"/case-studies/vr-funder"}
        showCaseStudy={false}
      />

      <div className="col-8 d-flex align-items-center justify-content-center">
        <div className="gif">
          <img
            width="600px"
            className="gallery-gif"
            src={gif}
            alt="easyscore gif"
          />
        </div>
      </div>
    </div>
  );
};

export default VRFunderSection;
