import React from "react";
import TESHeader2 from "./components/TESHeader2";

import { BsLink45Deg } from "react-icons/bs";

import overviewgif from "./assets/tes-overview-gif.webm";
import overviewgif2 from "./assets/tes-overview-gif.mp4";
import oldtesgif from "./assets/old-tes-demo-hq.webm";
import oldtesgif2 from "./assets/old-tes-demo-hq.mp4";
import pagesGif from "./assets/tes-page-demo.webm";
import pagesGif2 from "./assets/tes-page-demo.mp4";

import homeimg from "./assets/easy-score-home.png";
import oldimg from "./assets/old-home.png";
import searchpageimg from "./assets/search-page-poster.png";

import oldTesHomeMobile from "./assets/old-tes-home-mobile.png";
import oldTesSearchMobile from "./assets/old-tes-search-mobile.png";
import oldTesAboutMobile from "./assets/old-tes-about-mobile.png";

import homePageScreenshot from "./assets/home-page-screenshot.png";
import coursePageHeader from "./assets/course-page-header.png";

import ContactCTA from "../../projects/ContactCTA";
import AutoPlaySilentVideo from "../../../g-components/AutoPlaySilentVideo";

import "./theeasyscore.css";

const TheEasyScore = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <TESHeader2 />
        <div
          className="row w-100 project-section-container justify-content-center align-items-center"
          id="task"
        >
          <div className="col-xl-5 col-lg-12 textblock">
            <h4>Task/Goal</h4>
            <p>
              The previous website had an excellent uderlying API, rich with
              grade distribution and course information, making it a great
              potential resource for college students. The front-end, however,
              desparately needed an upgrade.
              <br /> At the time, the front-end was entirely non-responsive and
              had an unclear design -- it needed a facelift. Our goal was to
              scrap the website, re-developing it from the ground-up with a
              modern design and smooth user experience.
            </p>
          </div>
          <div className="col-xl-7 col-lg-12 d-flex justify-content-center align-items-center">
            <div className="gif">
              <AutoPlaySilentVideo
                className="primary-gif"
                src1={oldtesgif}
                src2={oldtesgif2}
                poster={oldimg}
              />
            </div>
          </div>
        </div>
        <div className="row w-100 project-section-container">
          <div className="col-xl-12 d-flex justify-content-center align-items-center mb-5">
            <h4>Old Mobile Design</h4>
          </div>
          <div className="col-xl-4 col-md-4 col-12  d-flex justify-content-center align-items-center">
            {/* Mobile Home Page */}
            <img
              // width="150px"
              src={oldTesHomeMobile}
              alt="old easyscore mobile home page design"
              className="box-shadow oldTesMobile"
            />
          </div>
          <div className="col-xl-4 col-md-4 col-6 d-flex justify-content-center align-items-center">
            {/* Mobile Search Page */}
            <img
              // width="150px"
              src={oldTesSearchMobile}
              className="box-shadow oldTesMobile"
              alt="old easyscore search screen on mobile"
            />
          </div>
          <div className="col-xl-4 col-md-4 col-6 d-flex justify-content-center align-items-center">
            {/* Mobile Search Page */}
            <img
              // width="150px"
              src={oldTesAboutMobile}
              className="box-shadow oldTesMobile"
              alt="old easyscore about page on mobile"
            />
          </div>
        </div>
        <div className="row w-100 d-flex justify-content-center pt-5">
          <div className="col-xl-12 d-flex justify-content-center align-items-center  pt-5 mb-2">
            <h4>Strategy</h4>
          </div>
          <div className="col-12">
            <div className="row w-100 pb-5 d-flex align-items-center no-gutters">
              <div className="col-xl-6 col-md-12 d-flex flex-column justify-content-center align-items-center textblock">
                <div className="d-flex justify-content-start">
                  <h6>Our Approach</h6>
                </div>
                <p>
                  We tried to take a user's perspective when planning the site's
                  design and functionality. The purpose of the site was to be
                  used as a course-planning resource for students. One
                  underlying issue, however, was that the site had no clear
                  indication <b>how to use it</b>.
                  <br />
                  We needed to establish <b>visual heirarchy</b>, and decide
                  which pieces of data could be most useful to students. The
                  client gave us free-reign over all design (color palette,
                  pages, technologies), and we ran with it.
                </p>
              </div>
              <div className="col-xl-6 col-md-12 d-flex flex-column justify-content-center align-items-center textblock pt-3 pb-5 mb-2">
                <h6>Technologies/notable dependencies</h6>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>Chart.js</li>
                  <li>Fuse.js</li>
                  <li>OAuth2</li>
                </ul>
              </div>
            </div>
            <div className="row w-100 pb-5">
              <div className="col-xl-6 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-start">
                  <h6>Color Palette</h6>
                </div>
                <p>
                  The site was centered around a local university and had
                  previously incorporated the school's colors into it's color
                  theming. We took that into mind with design, deciding that it
                  would be best to keep a simple palette (white background with
                  one primary color). This would allow us to easily create focal
                  points and keep interactivity intuitive.
                  <b>
                    Ideally, users would be able to navigate through and use it
                    without any instructions
                  </b>
                  .
                </p>
              </div>
              <div className="col-xl-6 col-md-12 d-flex justify-content-center align-items-center ">
                <img
                  src={homePageScreenshot}
                  width="500px"
                  className="box-shadow gallery-img"
                  alt="easyscore home page screenshot"
                />
              </div>
            </div>
            <div className="row w-100 pb-5">
              <div className="col-xl-6 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-start">
                  <h6>Purpose/Pages/Screens</h6>
                </div>
                <p>
                  The back-end offered a rich database of statistics and course
                  data, including values such as course ratings, fulfilled
                  requirements, upcoming instructors, previous instructors, and
                  instructor statistics (grade distribution, years taught,
                  etc.). This had all of the data of the official IU course
                  selection tool and more.
                  <br />
                  <br />
                  Since Course data was offered for courses' times of day,
                  fulfilled requirements, difficulties, and credit-hours, so we
                  decided to focus first on course selection. The initial search
                  should be specifically dedicated for finding the{" "}
                  <b>optimal course</b>. Once students found a
                  course-of-interest, we wanted them to be able to view it for
                  more information, where they could proceed to filter through
                  its corresponding professors and find the professor who
                  best-suites their desires (based off of factors such as
                  instructors' time-of-day, grade distribution, difficulty,
                  number-of-years taught, etc.). With this in mind, we created
                  the flow as{" "}
                  <b>
                    Home {">"} course search {">"} course/instructors page
                  </b>
                  .
                </p>
              </div>
              <div className="col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <AutoPlaySilentVideo
                  className="box-shadow gallery-img"
                  src1={pagesGif}
                  src2={pagesGif2}
                  poster={searchpageimg}
                />
              </div>
            </div>
            <div className="row w-100 pb-5">
              <div className="col-xl-6 col-md-12 d-flex flex-column justify-content-center align-items-start textblock">
                <div className="d-flex justify-content-start">
                  <h6>Navigating & Visualizing Data</h6>
                </div>
                <p>
                  Naturally, the most important part of the website was data,
                  and there was a lot of it. As a result, we needed to
                  incorporate a seamless way of filtering through data and
                  sifting through large amounts, without overwhelming the user
                  or creating an ugly interface.
                  <br />
                  <br />
                  To do this, we utilized custom-hook based pagination,
                  front-end dynamic filtering, and a fuzzy-search (Fuse.js) for
                  data navigation, and for data-visualization we incorporated
                  our color palette into various chart designs from Chart.js. To
                  keep the charts and data cards responsive, we opted to use
                  bootstrap and media queries.
                </p>
              </div>
              <div className="col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <img
                  src={coursePageHeader}
                  // width="500px"
                  className="box-shadow gallery-img"
                  alt="easy score course page header section"
                />
              </div>
            </div>
            <div className="row w-100 mt-3 pb-5 mb-5 d-flex flex-column justify-content-center align-items-center">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <h4>
                  <a
                    href={"https://the-easy-score.herokuapp.com/"}
                    className="link-primary-color"
                  >
                    View live{" "}
                    <span className="secondary animated-underline-2 underline-base pseudo-link">
                      Demo
                    </span>
                    <BsLink45Deg />
                  </a>
                </h4>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center ">
                <div className="gif">
                  <AutoPlaySilentVideo
                    className="primary-gif"
                    src1={overviewgif}
                    src2={overviewgif2}
                    poster={homeimg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <ContactCTA />
      </div>
    </>
  );
};

export default TheEasyScore;
