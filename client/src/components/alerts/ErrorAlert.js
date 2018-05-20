import React, { Component } from "react";

import { Alert } from "antd";

class ErrorAlert extends Component {
  render() {
    const alerts = Object.keys(this.props).map(key => {
      return <Alert key={key} message={this.props[key]} type="error" />;
    });

    return <div>{alerts}</div>;
  }
}

export default ErrorAlert;
