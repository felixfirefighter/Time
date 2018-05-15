import React, { Component } from "react";
import Calendar from "./components/calendar/Calendar";
import moment from "moment";

class App extends Component {
  render() {
    return (
      <div>
        <Calendar />
      </div>
    );
  }
}

export default App;
