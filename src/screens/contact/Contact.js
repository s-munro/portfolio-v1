import React from "react";
import "./Contact.css";
import Map from "./Map.jsx";
import TextField from "@material-ui/core/TextField";
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
                data-aos-delay="125"
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
                data-aos-delay="300"
                className="hover-up header"
              >
                a
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
            </div>
          </div>
          <div className="row w-100">
            <div className="col-12 d-flex flex-column">
              <form className="d-flex flex-column">
                <TextField id="standard-basic" label="Name" />
                <TextField id="standard-basic" label="Email" />
                <TextField id="standard-basic" label="Subject" />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
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
