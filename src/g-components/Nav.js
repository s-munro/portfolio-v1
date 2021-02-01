import React from "react";
import "../App.css";

const Nav = () => {
  return (
    <nav className="row w-100 d-flex align-items-end">
      <div className="col-6 nav-link">Home</div>
      <div className="col nav-link">Projects</div>
      <div className="col nav-link">Resume</div>
      <div className="col nav-link">Contact</div>
      <div className="col nav-link">Linkedin</div>
      <div className="col nav-link">Github</div>
    </nav>
  );
};

export default Nav;
