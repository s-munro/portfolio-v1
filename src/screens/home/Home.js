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
    <div className="container">
      <div className="row w-100 main-body d-flex justify-content-center align-items-center">
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center">
          <AnimatedHeader />
          <p data-aos="fade-up" data-aos-delay="400">Software Engineer</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1300" className="col-6 d-flex flex-column justify-content-center align-items-center">
          <h5>
            Take&nbsp;the&nbsp; 
            <span className="secondary link" onClick={handleTourClick}>
                tour
            </span>
          </h5>
          <BsArrowReturnRight />
        </div>
      </div>
    </div>
  );
};

export default Home;
