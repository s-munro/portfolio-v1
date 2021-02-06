import React from "react";
import "./Contact.css";
import Map from "./Map.jsx";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container contact-container pt-3">
      <div className="row w-100">
        <div className="col-xl-6 col-lg-6 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
          <div className="row w-100">
            <div className="col-12">
              <span
                data-aos="fade-up"
                data-aos-delay="25"
                className="hover-up header"
              >
                C
              </span>
              <span
                data-aos="fade-up"
                data-aos-delay="100"
                className="hover-up header"
              >
                o
              </span>
              <span
                data-aos="fade-up"
                data-aos-delay="225"
                className="hover-up header"
              >
                n
              </span>
              <span
                data-aos="fade-up"
                data-aos-delay="150"
                className="hover-up header"
              >
                t
              </span>
              <span
                data-aos="fade-up"
                data-aos-delay="175"
                className="hover-up header"
              >
                a
              </span>
              <span
                data-aos="fade-up"
                data-aos-delay="250"
                className="hover-up header"
              >
                c
              </span>
              <span
                data-aos="fade-up"
                data-aos-delay="125"
                className="hover-up header"
              >
                t
              </span>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-12 d-flex flex-column">
              <form className="d-flex flex-column">
                <TextField m={3} id="standard-basic" label="Name" />
                <TextField m={3} id="standard-basic" label="Email" />
                <TextField m={3} id="standard-basic" label="Subject" />
                <TextField
                  m={3}
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  // variant="filled"
                />
                <Button href="#text-buttons" color="primary">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-12">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
