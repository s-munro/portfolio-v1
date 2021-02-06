import React from "react";
import "./projects.css";
// import { FaGithub } from "react-icons/fa";
// import { IconContext } from "react-icons";

const ContactCTA = () => {
  return (
    <div className="row w-100 fluid m-0 contact-cta-container d-flex justify-content-center">
      <div
        className="col-6 d-flex flex-column justify-content-center align-items-center white-text"
        id="trigger-up"
      >
        <h2 className="white-text">
          <span
            // data-aos="fade-up"
            // data-aos-delay="25"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            C
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="100"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            o
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="125"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            n
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="50"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            t
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="150"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            a
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="20"
            className="white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            c
          </span>
          <span
            // data-aos="fade-up"
            // data-aos-delay="150"
            className="hover-up white-text"
            // data-aos-anchor-placement="center-bottom"
          >
            t
          </span>
        </h2>
        <p className="stat-center">
          <a
            href="https://www.linkedin.com/in/sjm-munro/"
            className="animated-underline-3 underline-base white-link"
            id="trigger-up"
          >
            LinkedIn
          </a>
          <span className="secondary"> | </span>
          <a
            href="https://the-easy-score.herokuapp.com/"
            className="animated-underline-3 underline-base white-link"
          >
            Resume
          </a>
          <span className="secondary"> | </span>
          <a
            href="/contact"
            className="animated-underline-3 underline-base white-link"
          >
            Message
          </a>
        </p>
      </div>
      <div className="col-6 d-flex flex-column justify-content-center align-items-center">
        <br />
        <h5
          className="white-text"
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="bottom-bottom"
        >
          <span className="secondary">|</span> Sam Munro
        </h5>
      </div>
    </div>
  );
};

export default ContactCTA;
