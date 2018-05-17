import React, { Component } from "react";
import moment from "moment";

import { Provider } from "react-redux";
import store from "./store";

import Calendar from "./components/calendar/Calendar";
import Modal from "./components/modal/Modal";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Calendar />
          <Modal />
        </div>
      </Provider>
    );
  }
}

export default App;
