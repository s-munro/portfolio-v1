import React from "react";
import gif from "../../assets/easyscore-giphy-demo.gif";
import Description from "./components/Description";

const EasyScoreSection = () => {
  return (
    <div className="row w-100 bottom-margin-twenty" id="easy-score">
      <div className="col-12 d-flex flex-column align-items-center justify-content-center mb-5">
        <h2
          className="project-heading"
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="500"
          // data-aos-anchor-placement="center-center"
        >
          The Easy Score
        </h2>
        <h6 data-aos="fade-right" data-aos-delay="150" data-aos-duration="500">
          An advanced course-planning resource for college students
        </h6>
      </div>

      <Description
        role={"Lead Developer"}
        duties={"Organized and implemented site design and development"}
        stat1={"React, Redux, Node.js"}
        stat2={"Material-UI, Chart.js, Fuse.js, Nodemailer"}
        githubLink={"https://github.com/s-munro/easyscore"}
        demoLink={"https://the-easy-score.herokuapp.com/"}
        caseStudyUrl={"/case-studies/the-easy-score"}
        showCaseStudy={true}
      />
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center">
        <div className="gif">
          <img width="600px" src={gif} alt="easyscore gif" />
        </div>
      </div>
    </div>
  );
};

export default EasyScoreSection;
