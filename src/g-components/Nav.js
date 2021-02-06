import React from "react";

import "./index.css";

const Nav = () => {
  return (
    <nav className="row w-100 d-flex align-items-end pt-4">
      <div className="col-7">
        <div>
          <li className="nav-link col-12 home-link">
            <a className="nav-a pointer" href="/">
              <span className="secondary">:</span>Sam
            </a>
          </li>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="col-1">
        <a className="nav-a pointer" href="/projects">
          <li className="nav-link secondary-link">Projects</li>
        </a>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="col-1">
        <li className="nav-link secondary-link">
          <a
            className="nav-a pointer"
            href="https://docs.google.com/document/d/1zyPr4E8VN1H1lpAXo6mSC4rj2HdxXmJIpCaCXKx6LH8/edit?usp=sharing"
          >
            Resume
          </a>
        </li>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="col-1">
        {/* <AiFillGithub /> */}
        <li className="nav-link secondary-link">
          <a className="nav-a pointer" href="https://github.com/s-munro">
            Github
          </a>
        </li>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="col-1">
        <li className="nav-link secondary-link">
          <a
            className="nav-a pointer"
            href="https://www.linkedin.com/in/sjm-munro/"
          >
            Linkedin
          </a>
        </li>
      </div>
      <div data-aos="fade-up" data-aos-delay="1300" className="col-1">
        <a className="nav-a pointer" href="/contact">
          <li className="nav-link secondary-link tertiary">Contact</li>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
