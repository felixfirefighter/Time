import React, { Component } from "react";
import { SketchPicker } from "react-color";
import reactCSS from "reactcss";
import { connect } from "react-redux";

import { updateEventForm } from "../../actions/eventActions";

class ColorPicker extends Component {
  state = {
    displayColorPicker: false
  };

  

  handleClick = () => {
    // reset tag to {}
    // this.props.resetTag();
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  render() {
    const color = this.props.color;

    const styles = reactCSS({
      default: {
        color: {
          width: "100%",
          height: "100%",
          borderRadius: "2px",
          background: `${color}`
        },
        swatch: {
          width: "100%",
          height: "32px",
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          cursor: "pointer"
        },
        popover: {
          position: "absolute",
          zIndex: "2"
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        }
      }
    });

    return (
      <div>
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={color} onChange={this.props.updateColor} />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  tag: state.tag
});

export default connect(mapStateToProps, {
  updateEventForm
})(ColorPicker);
