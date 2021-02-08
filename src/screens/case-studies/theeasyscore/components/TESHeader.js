import React from "react";

// import Loading from "../../g-components/Loading";
import { AiFillCaretDown } from "react-icons/ai";
// import "../theeasyscore.css";
// import "../../p.css";

const TESHeader = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.name);
    let element = document.getElementById(event.currentTarget.name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
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
          <a href="#task" name="task" className="caret-a" onClick={handleClick}>
            <AiFillCaretDown className="floating" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TESHeader;