import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "antd";

import { openModal, closeModal } from "../../actions/modalActions";
import {
  addEvent,
  updateEvent,
  updateEventForm
} from "../../actions/eventActions";

import IsEmpty from "../../validation/is-empty";
import Spinner from "../common/Spinner";
import ErrorAlert from "../alerts/ErrorAlert";
import WrappedEventForm from "./WrappedEventForm";
import DeleteConfirmationModal from "../events/DeleteConfirmationModal";

class EventModal extends Component {
  render() {
    const { start, end, title, name, color } = this.props.event.form;

    const header = this.props.modal.openNew ? (
      <h1>Add New Event</h1>
    ) : (
      <h1>Edit Event</h1>
    );

    const deleteModal =
      this.props.modal && this.props.modal.deleteModalIsOpen ? (
        <DeleteConfirmationModal />
      ) : null;

    return (
      <div>
        <Modal
          visible={this.props.modal.modalIsOpen}
          onCancel={this.props.closeModal}
          footer={null}
        >
          {header}

          <ErrorAlert {...this.props.error} />

          <WrappedEventForm
            title={title}
            start={start}
            end={end}
            name={name}
            color={color}
            addEvent={this.props.addEvent}
            updateEvent={this.props.updateEvent}
            closeModal={this.props.closeModal}
            openNew={this.props.modal.openNew}
          />
        </Modal>

        {deleteModal}
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
  updateEvent,
  openModal,
  closeModal
})(EventModal);
