import React, { lazy, Suspense } from "react";
import Loading from "../../g-components/Loading";
import { AiFillCaretDown } from "react-icons/ai";
import "./projects.css";

const Hero = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.currentTarget.name);
    let element = document.getElementById(event.currentTarget.name);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ProjectsHeader = lazy(() => import("./components/ProjectsHeader"));

  return (
    <div className="row d-flex w-100">
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
        <div className="row w-100">
          <Suspense fallback={<Loading />}>
            <ProjectsHeader />
          </Suspense>
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
      <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center align-items-center">
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
