import React from "react";
import Description from "./Description";
import AutoPlaySilentVideo from "../../../g-components/AutoPlaySilentVideo";

const GallerySection = ({ sectionData }) => {
  const {
    sectionId,
    title,
    headline,
    gif,
    gif2,
    descriptionData,
    poster,
  } = sectionData;
  return (
    <div className="row w-100 bottom-margin-twenty" id={sectionId}>
      <div className="col-12 d-flex flex-column align-items-center justify-content-center mb-5">
        <h2
          className="project-heading mobile-mid-centered"
          data-aos="fade-right"
          data-aos-delay="0"
          data-aos-duration="500"
          // data-aos-anchor-placement="center-center"
        >
          {title}
        </h2>
        <h6
          className="mobile-mid-centered"
          data-aos="fade-right"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          {headline}
        </h6>
      </div>
      <Description
        role={descriptionData.role}
        duties={descriptionData.duties}
        stat1={descriptionData.stat1}
        stat2={descriptionData.stat2}
        githubLink={descriptionData.githubLink}
        demoLink={descriptionData.demoLink}
        caseStudyUrl={descriptionData.caseStudyUrl}
        showCaseStudy={descriptionData.showCaseStudy}
      />
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 d-flex align-items-center justify-content-center mobile-mid-margin">
        <div className="gif">
          <AutoPlaySilentVideo
            className="gallery-gif"
            src1={gif}
            src2={gif2}
            poster={poster}
          />
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="gallery-gif"
            type="video/mp4"
            alt="easyscore gif"
          >
            <source src={gif} type="video/webm" />
            <source src={gif2} type="video/mp4" />
          </video> */}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
