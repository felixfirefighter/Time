import React, { Component } from "react";
import { connect } from "react-redux";

import Calendar from "../calendar/Calendar";
import CreateEvent from "../events/CreateEvent";

class CalendarContainer extends Component {
  render() {
    const modal =
      this.props.modal && this.props.modal.modalIsOpen ? <CreateEvent /> : null;

    return (
      <div>
        <Calendar />

        {modal}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(CalendarContainer);
