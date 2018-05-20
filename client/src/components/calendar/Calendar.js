import React, { Component } from "react";
import { connect } from "react-redux";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import {
  getEvents,
  addEvent,
  updateEventForm,
  clearEventForm
} from "../../actions/eventActions";
import { openModal } from "../../actions/modalActions";
import Spinner from "../common/Spinner";

import "react-big-calendar/lib/css/react-big-calendar.css";

// momentTZ.tz.setDefault("America/Danmarkshavn");
BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events, loading } = this.props.event;

    let calendar;
    if (events == null || loading) {
      calendar = <Spinner />;
    } else {
      // console.log(events);

      //change start and end date to Date object
      events.map(event => {
        event.start = moment(event.start).toDate();
        event.end = moment(event.end).toDate();
      });

      // console.log(events);

      calendar = (
        <BigCalendar
          selectable
          defaultDate={new Date()}
          defaultView="day"
          events={events}
          style={{ height: "100vh" }}
          culture={"en"}
          onSelectSlot={slotInfo => {
            //open up modal
            // console.log(slotInfo);
            const { start, end } = slotInfo;

            this.props.openModal();

            //clear all the fields first
            this.props.clearEventForm();

            //pre fill the form
            this.props.updateEventForm({ start, end });
          }}
        />
      );
    }

    return <div>{calendar}</div>;
  }
}

const mapStateToProps = state => ({
  event: state.event,
  tag: state.tag
});

export default connect(mapStateToProps, {
  getEvents,
  addEvent,
  updateEventForm,
  clearEventForm,
  openModal
})(Calendar);
