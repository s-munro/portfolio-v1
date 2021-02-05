import React from "react";

import "./index.css";

const Nav = () => {
  return (
    <nav className="row w-100 d-flex align-items-end pt-4">
      <div className="col-7">
        <div>
          <li className="nav-link col-12 home-link">
            <span className="secondary">:</span>Sam
          </li>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="col-1">
        <li className="nav-link secondary-link">Projects</li>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="col-1">
        <li className="nav-link secondary-link">Resume</li>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="col-1">
        {/* <AiFillGithub /> */}
        <li className="nav-link secondary-link">Github</li>
      </div>
      <div data-aos="fade-up" data-aos-delay="0" className="col-1">
        <li className="nav-link secondary-link">Linkedin</li>
      </div>
      <div data-aos="fade-up" data-aos-delay="1300" className="col-1">
        <li className="nav-link secondary-link tertiary">Contact</li>
      </div>
    </nav>
  );
};

export default Nav;
