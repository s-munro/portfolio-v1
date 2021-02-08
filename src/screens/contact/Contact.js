import React, { useState } from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import "./Contact.css";

const initialFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const handleChange = (e, value) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues(initialFormValues);
  };

  const classes = useStyles();
  return (
    <div className="container d-flex flex-column align-items-center mt-3 pt-3 pb-3">
      <div className="row w-100 d-flex justify-content-center mt-5">
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
              <form className="d-flex flex-column" onSubmit={handleSubmit}>
                <TextField
                  m={3}
                  id="name"
                  name="name"
                  label="Name"
                  onChange={handleChange}
                  value={formValues.name}
                />
                <TextField
                  m={3}
                  id="email"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  value={formValues.email}
                />
                <TextField
                  m={3}
                  id="subject"
                  name="subject"
                  label="Subject"
                  onChange={handleChange}
                  value={formValues.subject}
                />
                <TextField
                  m={3}
                  id="message"
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  onChange={handleChange}
                  value={formValues.message}
                />
                <Button
                  // variant="contained"
                  color="primary"
                  className={classes.button}
                  endIcon={<Icon>send</Icon>}
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
