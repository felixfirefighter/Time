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
  eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor;
    if (event.tag != null) {
      backgroundColor = event.tag.color;
    }

    const style = {
      backgroundColor: backgroundColor,
      borderRadius: "0px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block"
    };
    return {
      style: style
    };
  };

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

        return event;
      });

      // console.log(events);

      calendar = (
        <BigCalendar
          selectable
          defaultDate={new Date()}
          defaultView="week"
          events={events}
          style={{ height: "100vh" }}
          eventPropGetter={this.eventStyleGetter}
          onSelectEvent={event => {
            this.props.openModal(false);

            this.props.clearEventForm();

            const { _id, start, end, tag, title } = event;
            // const { name, color } = tag;

            let name = "";
            let color = "";
            if(tag != null){
              name = tag.name;
              color = tag.color;
            }

            this.props.updateEventForm({ _id, start, end, title, name, color });
          }}
          onSelectSlot={slotInfo => {
            //open up modal
            // console.log(slotInfo);
            const { start, end } = slotInfo;

            //true to indicate its a new event
            this.props.openModal(true);

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
