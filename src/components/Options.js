import React from "react";
import Option from "./Option.js";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="button--link" onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </div>
    {props.options.length == 0 && (
      <p className="widget-msg">Add some options to get started!</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
