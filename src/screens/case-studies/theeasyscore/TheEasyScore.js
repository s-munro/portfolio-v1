import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";

import introgif from "./assets/tes-intro-demo.gif";
import filtergif from "./assets/tes-filter-demo.gif";
import oldtesgif from "./assets/old-tes-demo-hq.gif";

import oldTesHomeMobile from "./assets/old-tes-home-mobile.png";
import oldTesSearchMobile from "./assets/old-tes-search-mobile.png";
import oldTesAboutMobile from "./assets/old-tes-about-mobile.png";

import "./theeasyscore.css";

const TheEasyScore = () => {
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <div className="row w-100">
        <div className="col-12 d-flex flex-column justify-content-center align-items-end project-hero-container ">
          <div className="col-12 d-flex justify-content-center">
            <span
              data-aos="fade-up"
              data-aos-delay="25"
              className="hover-up case-header"
            >
              T
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="hover-up case-header"
            >
              h
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="125"
              className="hover-up case-header"
            >
              e
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="hover-up case-header"
            >
              E
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="300"
              className="hover-up case-header"
            >
              a
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="400"
              className="hover-up case-header"
            >
              s
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="350"
              className="hover-up case-header"
            >
              y
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <span
              data-aos="fade-up"
              data-aos-delay="200"
              className="hover-up case-header"
            >
              S
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="hover-up case-header"
            >
              c
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="300"
              className="hover-up case-header"
            >
              o
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="400"
              className="hover-up case-header"
            >
              r
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="350"
              className="hover-up case-header"
            >
              e
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <a
              href="#easy-score"
              name="easy-score"
              className="caret-a"
              onClick={handleClick}
            >
              <IconContext.Provider value={{ color: "#f53361" }}>
                <AiFillCaretDown className="floating" />
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
      <div className="row w-100 project-section-container">
        <div className="col-xl-5 col-lg-12">
          <h4>Task/Goal</h4>
          <p>
            The previous website had an excellent uderlying API, rich with grade
            distribution and course information, making it a great potential
            resource for college students. The front-end, however, desparately
            needed an upgrade.
            <br /> At the time, the front-end was entirely non-responsive and
            had an unclear design -- it needed a facelift. Our goal was to scrap
            the website, re-developing it from the ground-up with a modern
            design and smooth user experience.
          </p>
        </div>
        <div className="col-xl-7 col-lg-12">
          <div className="gif">
            <img width="600px" src={oldtesgif} alt="easyscore gif" />
          </div>
        </div>
      </div>
      <div className="row w-100 project-section-container">
        <div className="col-xl-12 d-flex justify-content-center align-items-center mb-5">
          <h4>Old Mobile Design</h4>
        </div>
        <div className="col-xl-4 col-md-4 col-4  d-flex justify-content-center align-items-center">
          {/* Mobile Home Page */}
          <img width="150px" src={oldTesHomeMobile} className="box-shadow" />
        </div>
        <div className="col-xl-4 col-md-4 col-4 d-flex justify-content-center align-items-center">
          {/* Mobile Search Page */}
          <img width="150px" src={oldTesSearchMobile} className="box-shadow" />
        </div>
        <div className="col-xl-4 col-md-4 col-4 d-flex justify-content-center align-items-center">
          {/* Mobile Search Page */}
          <img width="150px" src={oldTesAboutMobile} className="box-shadow" />
        </div>
      </div>
      <div className="row w-100 d-flex justify-content-center pt-5">
        <div className="col-4 d-flex justify-content-center tes-img-1 box-shadow"></div>
        <div className="col-4 d-flex justify-content-center tes-img-2 box-shadow"></div>
        <div className="col-4 d-flex justify-content-center tes-img-3 box-shadow"></div>
      </div>
    </div>
  );
};

export default TheEasyScore;
