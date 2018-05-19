import React, { Component } from "react";
import moment from "moment";

import { Provider, connect } from "react-redux";
import store from "./store";

import Calendar from "./components/calendar/Calendar";
import CreateEvent from "./components/events/CreateEvent";
import CalendarContainer from "./components/layout/CalendarContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <CalendarContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
