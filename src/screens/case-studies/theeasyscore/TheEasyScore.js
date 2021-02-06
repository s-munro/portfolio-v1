import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";

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
  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <>
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
            <img
              width="150px"
              src={oldTesSearchMobile}
              className="box-shadow"
            />
          </div>
          <div className="col-xl-4 col-md-4 col-4 d-flex justify-content-center align-items-center">
            {/* Mobile Search Page */}
            <img width="150px" src={oldTesAboutMobile} className="box-shadow" />
          </div>
        </div>
        <div className="row w-100 d-flex justify-content-center pt-5">
          <div className="col-xl-12 d-flex justify-content-center align-items-center mb-5">
            <h4>Strategy</h4>
          </div>
          <div className="col-12">
            <div className="row w-100 pb-5">
              <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                <h6>Our Approach</h6>
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
              <div className="col-6 d-flex flex-column justify-content-center align-items-center">
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
              <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                <h6>Our Decision</h6>
                <div className="d-flex justify-content-start">
                  <h7>Color Palette</h7>
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
              <div className="col-6 d-flex justify-content-center align-items-center">
                <img
                  src={homePageScreenshot}
                  width="500px"
                  className="box-shadow"
                />
              </div>
            </div>
            <div className="row w-100 pb-5">
              <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                <div className="d-flex justify-content-start">
                  <h7>Purpose/Pages/Screens</h7>
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
              <div className="col-6 d-flex justify-content-center align-items-center">
                <img src={pagesGif} width="500px" className="box-shadow" />
              </div>
            </div>
            <div className="row w-100 pb-5">
              <div className="col-6 d-flex flex-column justify-content-center align-items-start">
                <div className="d-flex justify-content-start">
                  <h7>Navigating & Visualizing Data</h7>
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
              <div className="col-6 d-flex justify-content-center align-items-center">
                <img
                  src={coursePageHeader}
                  width="500px"
                  className="box-shadow"
                />
              </div>
            </div>
            <div className="row w-100 mt-5 pb-5 mb-5 d-flex flex-column justify-content-center align-items-center">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <h2>
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
                </h2>
              </div>
              <div className="col-12 d-flex justify-content-center align-items-center ">
                <div className="gif">
                  <img width="600px" src={overviewgif} alt="easyscore gif" />
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
