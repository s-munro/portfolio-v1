import React, { lazy, Suspense } from "react";
import Loading from "../../g-components/Loading";
import { AiFillCaretDown } from "react-icons/ai";
import ProjectsHeader from "./components/ProjectsHeader";
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
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center mid-margin-bottom-padding-top">
        <div className="row w-100">
          <ProjectsHeader />
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
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
        <ul className="big-list-ul">
          <li className="big-list">
            <a
              href="#easy-score"
              name="easy-score"
              className="project-a animated-underline"
              onClick={handleClick}
            >
              The <span className="secondary-projectpage">Easy</span> Scor
              <span className="">e</span>
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
                Fund<span className="">e</span>r
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
