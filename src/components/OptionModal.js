import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3>
      Here's what you should do.{" "}
      {props.selectedOption && <p>{props.selectedOption}</p>}
    </h3>

    <button className="button " onClick={props.handleCloseModal}>
      Sure.. I guess
    </button>
  </Modal>
);
export default OptionModal;
