import React from "react";
import TESHeader from "./components/TESHeader";

import { BsLink45Deg } from "react-icons/bs";

import overviewgif from "./assets/tes-overview-gif.gif";
import oldtesgif from "./assets/old-tes-demo-hq.gif";
import pagesGif from "./assets/tes-page-demo.gif";

import oldTesHomeMobile from "./assets/old-tes-home-mobile.png";
import oldTesSearchMobile from "./assets/old-tes-search-mobile.png";
import oldTesAboutMobile from "./assets/old-tes-about-mobile.png";

import homePageScreenshot from "./assets/home-page-screenshot.png";
import coursePageHeader from "./assets/fullscreen.png";

import ContactCTA from "../../projects/ContactCTA";

import "./theeasyscore.css";

const TheEasyScore = () => {
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <TESHeader />
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
              <img
                // width="600px"
                className="primary-gif"
                src={oldtesgif}
                alt="easyscore gif"
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
                  We tried to take a users' perspective when planning the site's
                  design and functionality. The purpose of the site was to be
                  used as a course-planning resource for students. One
                  underlying issue, however, was that the site had no clear
                  indication how <b>how to use it</b>.
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
                  previously incorporated that heavily into it's color theming.
                  We took that into mind with design, deciding that it would be
                  best to keep a simple palette (white with a primary color), to
                  keep call-to-actions and interactivity intuitive. <br />
                  We needed to establish <b>visual heirarchy</b>, and decide
                  which pieces of data could be most useful to students.{" "}
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
                  The back-end offered a rich database with valuable selection
                  data, including course ratings, which requirements each course
                  fulfills, who is teaching it next semester, who has taught it
                  previously, and all of the instructors' corresponding grade
                  distributions and what time of day their sections are offered
                  at. Basically, this had all of the data of the official IU
                  course selection tool and <b>more</b>.
                  <br />
                  <br />
                  We decided that because course data includes time of day,
                  fulfilled requirements, difficulty, and credit-hours, this
                  would be an incredible tool for selecting courses. Thus, the
                  initial search should be specifically dedicated for finding
                  the <b>optimal course</b>. Once students found a
                  course-of-interest, we wanted them to be able to view it for
                  more information, where they could filter through its
                  corresponding professors to find the one who best-suites their
                  desires (time-of-day, grade distribution, difficulty,
                  number-of-years taught, etc.). With this in mind, we created
                  the flow as{" "}
                  <b>
                    Home {">"} course search {">"} course/instructors page
                  </b>
                  .
                </p>
              </div>
              <div className="col-xl-6 col-md-12 d-flex justify-content-center align-items-center">
                <img
                  src={pagesGif}
                  // width="500px"
                  className="box-shadow gallery-img"
                  alt="easy score changing pages demo"
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
                  <img
                    className="primary-gif"
                    // width="600px"
                    src={overviewgif}
                    alt="easy score general usage demo gif"
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
