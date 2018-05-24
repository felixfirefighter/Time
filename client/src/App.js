import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router } from "react-router-dom";

import MasterLayout from "./components/layout/MasterLayout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MasterLayout />
        </Router>
      </Provider>
    );
  }
}

export default App;
