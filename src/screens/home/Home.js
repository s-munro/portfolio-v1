import React from "react";
import "../../App.css";
import { BsArrowReturnRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import AnimatedHeader from "./AnimatedHeader";
import "./home.css";

const Home = (props) => {
  const history = useHistory();

  const handleTourClick = () => {
    history.push("/projects");
  };

  return (
    <div className="container d-flex justify-content-center mt-5 pt-5">
      <div className="row w-100 d-flex justify-content-center align-items-center pt-5 home-mobile-padding-top">
        <div className="col-xl-6 col-lg-6 col-md-12 home-mobile-padding-top">
          <AnimatedHeader />
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="col-12 tour-text d-flex flex-column align-items-center justify-content-center"
          >
            Software Engineer
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
            className="row w-100 d-flex flex-column align-items-center"
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
    </div>
  );
};

export default Home;
