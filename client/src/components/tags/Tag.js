import React, { Component } from "react";

import {connect} from 'react-redux';
import { List, Button, Input } from "antd";

import {openDeleteTagModal} from '../../actions/modalActions';

class Tag extends Component {
  state = {
    isEdit: true
  };

  onPrimaryClick = e => {
    if (this.state.isEdit) {
      console.log("EDIT");
    } else {
      console.log("SAVE");
    }

    this.setState(prevState => ({ isEdit: !prevState.isEdit }));
  };

  onDeleteClick = () =>{
    console.log(this.props._id);
    this.props.openDeleteTagModal(this.props._id);
  }

  render() {

    const title = this.state.isEdit ? <p>{this.props.name}</p> : <Input value={this.props.name} placeholder="Title"/>

    const primaryButton = this.state.isEdit ? (
      <Button ghost type="primary" onClick={this.onPrimaryClick}>
        Edit
      </Button>
    ) : (
      <Button type="primary" onClick={this.onPrimaryClick}>
        Save
      </Button>
    );

    return (
      <List.Item
        actions={[
          primaryButton,
          <Button ghost type="danger" onClick={this.onDeleteClick}>
            Delete
          </Button>
        ]}
      >
        <List.Item.Meta title={title} />
        <div
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: this.props.color
          }}
        />
      </List.Item>
    );
  }
}

export default connect(null, {openDeleteTagModal})(Tag);
