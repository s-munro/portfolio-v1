import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./projects.css";

const Hero = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.name);
    let element = document.getElementById(event.currentTarget.name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="row d-flex w-100">
      <div className="col-6 d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <span
              data-aos="fade-up"
              data-aos-delay="25"
              className="hover-up header"
            >
              P
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="100"
              className="hover-up header"
            >
              r
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="125"
              className="hover-up header"
            >
              o
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="150"
              className="hover-up header"
            >
              j
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="300"
              className="hover-up header"
            >
              e
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="400"
              className="hover-up header"
            >
              c
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="350"
              className="hover-up header"
            >
              t
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="200"
              className="hover-up header"
            >
              s
            </span>
          </div>
        </div>
        <div className="row w-100">
          <div className="col-12 d-flex justify-content-center">
            <a
              href="#easy-score"
              name="easy-score"
              className="caret-a"
              onClick={handleClick}
            >
              <AiFillCaretDown className="floating" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-6 d-flex justify-content-center align-items-center">
        <ul>
          <li className="big-list">
            <a
              href="#easy-score"
              name="easy-score"
              className="project-a animated-underline"
              onClick={handleClick}
            >
              The <span className="secondary-projectpage">Easy</span> Scor
              <span className="secondary">e</span>
            </a>
          </li>
          <li className="big-list">
            <a
              href="#vr-funder"
              name="vr-funder"
              className="project-a animated-underline"
              onClick={handleClick}
            >
              VR{" "}
              <span className="secondary-projectpage">
                Fund<span className="secondary">e</span>r
              </span>
            </a>
          </li>
          <li className="big-list">
            <a
              href="#studios"
              name="studios"
              className="project-a animated-underline"
              onClick={handleClick}
            >
              707 Hair <span className="secondary-projectpage">Studios</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
