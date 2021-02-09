import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

import App from "./App";
import AOS from "aos";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import reducer from "./state/reducer";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2f294f",
    },
    secondary: {
      main: "#f53361",
    },
    tertiary: {
      main: "#ea99fb",
    },
  },
});

const store = createStore(reducer, applyMiddleware(logger));

AOS.init();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
