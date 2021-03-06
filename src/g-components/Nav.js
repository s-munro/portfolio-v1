import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { connect } from "react-redux";
import { setShowSidebar } from "../state/actions";

import "./index.css";

const Nav = (props) => {
  const handleSidebarClick = () => {
    props.setShowSidebar(!props.showSidebar);
  };

  return (
    <nav className="row w-100 d-flex align-items-end pt-4">
      <div className="col-xl-7 col-lg-7 col-md-2 col-sm-2 col-10 d-flex logo-flex align-items-center">
        <li className="nav-link col-12 pr-0 pl-0 home-link">
          <a className="nav-a pointer" href="/">
            <span className="secondary">:</span>Sam
          </a>
        </li>
      </div>
      <div
        className="col-2 d-flex justify-content-end align-items-center hamburger-button"
        style={{ height: "100%" }}
        onClick={handleSidebarClick}
      >
        <BiMenuAltRight size={"32px"} onClick={handleSidebarClick} />
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="0"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger"
      >
        <a className="nav-a pointer" href="/projects">
          <li className="nav-link secondary-link d-flex justify-content-center align-items-center">
            Projects
          </li>
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="0"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger"
      >
        <li className="nav-link secondary-link d-flex justify-content-center align-items-center">
          <a
            className="nav-a pointer"
            href="https://docs.google.com/document/d/1zyPr4E8VN1H1lpAXo6mSC4rj2HdxXmJIpCaCXKx6LH8/edit?usp=sharing"
          >
            Resume
          </a>
        </li>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="0"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger"
      >
        <li className="nav-link secondary-link d-flex justify-content-center align-items-center">
          <a className="nav-a pointer" href="https://github.com/s-munro">
            Github
          </a>
        </li>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="0"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger"
      >
        <li className="nav-link secondary-link d-flex justify-content-center align-items-center">
          <a
            className="nav-a pointer"
            href="https://www.linkedin.com/in/sjm-munro/"
          >
            Linkedin
          </a>
        </li>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor=".nav-a"
        data-aos-delay="1300"
        className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-2 d-flex justify-content-center align-items-center non-hamburger"
      >
        <a
          className="nav-a pointer"
          href='mailto:sjm.munro@gmail.com?subject="re:portfolio"'
        >
          <li className="nav-link secondary-link d-flex justify-content-center align-items-center tertiary">
            Contact
          </li>
        </a>
      </div>
    </nav>
  );
};

const mapState = (state) => {
  return {
    showSidebar: state.showSidebar,
  };
};

export default connect(mapState, { setShowSidebar })(Nav);
