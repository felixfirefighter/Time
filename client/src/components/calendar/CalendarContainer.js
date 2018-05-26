import React, { Component } from "react";
import { connect } from "react-redux";

import Calendar from "./Calendar";
import EventModal from "../events/EventModal";
import DeleteConfirmationModal from "../events/DeleteConfirmationModal";

class CalendarContainer extends Component {
  render() {
    const modal =
      this.props.modal && this.props.modal.modalIsOpen ? <EventModal /> : null;

    const deleteModal =
      this.props.modal && this.props.modal.deleteModalIsOpen ? (
        <DeleteConfirmationModal />
      ) : null;

    return (
      <div>
        <Calendar />
        {modal}

        {deleteModal}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(CalendarContainer);
