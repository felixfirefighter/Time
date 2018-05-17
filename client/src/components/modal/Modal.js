import React, { Component } from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";

import { openModal, closeModal } from "../../actions/modalActions";

import IsEmpty from "../../validation/is-empty";
import Spinner from "../common/Spinner";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

ReactModal.setAppElement("#root");

class Modal extends Component {
  render() {
    console.log(this.props.modal);

    let modalContent;
    if (IsEmpty(this.props.modal.slotDates)) {
      modalContent = <Spinner />;
    } else {
      modalContent = (
        <div>
          <p>{this.props.modal.slotDates.start.toString()}</p>
          <p>{this.props.modal.slotDates.end.toString()}</p>
        </div>
      );
    }

    return (
      <ReactModal
        isOpen={this.props.modal.modalIsOpen}
        // onAfterOpen={this.afterOpenModal}
        onRequestClose={this.props.closeModal}
        style={customStyles}
      >
        {modalContent}
      </ReactModal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps, { openModal, closeModal })(Modal);
