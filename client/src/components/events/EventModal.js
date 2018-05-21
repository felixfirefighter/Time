import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "antd";

import { openModal, closeModal } from "../../actions/modalActions";
import { addEvent, updateEventForm } from "../../actions/eventActions";

import IsEmpty from "../../validation/is-empty";
import Spinner from "../common/Spinner";
import ErrorAlert from "../alerts/ErrorAlert";
import WrappedEventForm from "./WrappedEventForm";

class EventModal extends Component {
  handleOnFieldsChange = changeFields => {
    console.log(changeFields);
    this.props.updateEventForm(changeFields);
  };

  render() {
    const { start, end, title, name, color } = this.props.event.form;

    return (
      <div>
        <Modal
          visible={this.props.modal.modalIsOpen}
          onCancel={this.props.closeModal}
          footer={null}
        >
          <h1>Event</h1>

          <ErrorAlert {...this.props.error} />

          <WrappedEventForm
            title={title}
            start={start}
            end={end}
            name={name}
            color={color}
            addEvent={this.props.addEvent}
            closeModal={this.props.closeModal}
            onFieldsChange={this.handleOnFieldsChange}
          />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  color: state.color,
  error: state.error,
  event: state.event
});

export default connect(mapStateToProps, {
  addEvent,
  updateEventForm,
  openModal,
  closeModal
})(EventModal);
