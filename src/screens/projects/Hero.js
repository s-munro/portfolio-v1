import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "./projects.css";

const Hero = () => {
  return (
    <div className="row d-flex w-100">
      <div className="col-6 projects-container d-flex justify-content-center align-items-center">
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
      <div className="col-6 d-flex justify-content-center align-items-center">
        <ul>
          <li className="big-list">
            <a href="#" className="project-a">
              The Easy Score
            </a>
          </li>
          <li className="big-list">
            <a href="#" className="project-a">
              VR Funder
            </a>
          </li>
          <li className="big-list">
            <a href="#" className="project-a">
              707 Hair Studios
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
