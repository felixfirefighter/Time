import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BigCalendar
          selectable
          defaultDate={new Date()}
          defaultView="day"
          events={[]}
          style={{ height: "100vh" }}
          onSelectSlot={slotInfo => {
            console.log(slotInfo);
          }}
        />
      </div>
    );
  }
}
export default Calendar;
