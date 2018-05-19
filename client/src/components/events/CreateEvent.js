import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "antd";

import { openModal, closeModal } from "../../actions/modalActions";
import { addEvent } from "../../actions/eventActions";

import IsEmpty from "../../validation/is-empty";
import Spinner from "../common/Spinner";
import ErrorAlert from "../alerts/ErrorAlert";
import CreateEventForm from "./CreateEventForm";

class CreateEvent extends Component {
  render() {
    const { title } = this.props.error;

    const { start, end } = this.props.modal.slotDates;

    console.log(start, end);

    return (
      <div>
        <Modal
          visible={this.props.modal.modalIsOpen}
          onCancel={this.props.closeModal}
        >
          <ErrorAlert {...this.props.error} />

          <CreateEventForm
            start={start}
            end={end}
            addEvent={this.props.addEvent}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  error: state.error
});

export default connect(mapStateToProps, { addEvent, openModal, closeModal })(
  CreateEvent
);
