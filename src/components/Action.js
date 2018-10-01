import React from "react";
const Action = props => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions} //disable if it does not have an option
    >
      What should I do?
    </button>
  </div>
);

export { Action as default };
