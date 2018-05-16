import React, { Component } from "react";
import Calendar from "./components/calendar/Calendar";
import moment from "moment";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Calendar />
        </div>
      </Provider>
    );
  }
}

export default App;
