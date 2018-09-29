import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleCloseModal}
  >
    <h3>
      Selected Option:{" "}
      {props.selectedOption && <span>{props.selectedOption}</span>}
    </h3>

    <button onClick={props.handleCloseModal}>Okay</button>
  </Modal>
);
export default OptionModal;
