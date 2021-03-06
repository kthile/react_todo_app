import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp.js";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

/*stateless funcitonal component
  advantages: faster than class-based, best used for simple presentation
  class-based component
  advantages: access to the state, better for complex tasks */

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
