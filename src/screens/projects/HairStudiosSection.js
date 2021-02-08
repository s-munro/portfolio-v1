import React from "react";
import gif from "../../assets/707-hair-studios-demo-gif.gif";
import Description from "./components/Description";

const HairStudiosSection = () => {
  return (
    <div className="row w-100 bottom-margin-twenty" id="studios">
      <div className="col-12 d-flex flex-column align-items-center justify-content-center mb-5">
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
      <Description
        role={"Lead Developer/Designer"}
        duties={`Designed and Implemented WordPress site for the hair studio's
        rebranding campaign`}
        stat1={"WordPress"}
        stat2={"Elementor, Woocommerce"}
        demoLink={"https://707hairstudios.com/"}
        live={true}
        caseStudyUrl={"/case-studies/707-hair-studios"}
      />

      <div className="col-8 d-flex align-items-center justify-content-center">
        <div className="gif">
          <img
            width="600px"
            className="gallery-gif"
            src={gif}
            alt="707 hair studios demo gif"
          />
        </div>
      </div>
    </div>
  );
};

export default HairStudiosSection;
