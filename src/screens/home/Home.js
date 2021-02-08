import React from "react";
import "../../App.css";
import { BsArrowReturnRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();

  const handleTourClick = () => {
    history.push("/projects");
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row w-100">
        <main className="col-12 w-100 d-flex align-items-center justify-content-center">
          <div className="row w-100">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 hero-border-right d-flex justify-content-center align-items-center">
              <div className="row w-100">
                <div className="col-12 d-flex justify-content-center boldest">
                  <h1 className="boldest">
                    <span
                      data-aos="fade-up"
                      data-aos-delay="25"
                      className="hover-up"
                    >
                      S
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="hover-up"
                    >
                      a
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="125"
                      className="hover-up"
                    >
                      m
                    </span>
                    &nbsp;
                    <span
                      data-aos="fade-up"
                      data-aos-delay="150"
                      className="hover-up"
                    >
                      M
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="hover-up"
                    >
                      u
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="hover-up"
                    >
                      n
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="350"
                      className="hover-up"
                    >
                      r
                    </span>
                    <span
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="hover-up"
                    >
                      o
                    </span>
                  </h1>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="col-12 tour-text d-flex flex-column align-items-center justify-content-center"
                >
                  Software Developer
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12  d-flex flex-column justify-content-center main-right-side">
              <div
                data-aos="fade-up"
                data-aos-delay="1300"
                data-aos-anchor=".tour-text"
                className="row w-100 portal d-flex flex-column align-items-center justify-content-center"
              >
                <div className="col-12 d-flex justify-content-center align-items-center">
                  Take&nbsp;the&nbsp;
                  <span className="secondary link" onClick={handleTourClick}>
                    tour
                  </span>
                  <br />
                </div>
                <BsArrowReturnRight className="" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
