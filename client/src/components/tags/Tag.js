import React, { Component } from "react";

import { connect } from "react-redux";
import { List, Button, Input } from "antd";

import ColorPicker from "../common/ColorPicker";

import { openDeleteTagModal } from "../../actions/modalActions";
import { updateTag } from '../../actions/tagActions';

class Tag extends Component {
  state = {
    isEdit: true,
    color: this.props.color,
    name: this.props.name,
  };

  onPrimaryClick = e => {
    if(!this.state.isEdit){
      console.log("SAVE");
      const {name, color} = this.state;
      const tagData = {name, color};

      this.props.updateTag(this.props._id, tagData);
    }

    this.setState(prevState => ({ isEdit: !prevState.isEdit }));
  };

  updateColor = color =>{
    // console.log(color.hex);
    this.setState({color: color.hex});
  }

  onChange = e =>{
    this.setState({name: e.target.value});
  }

  onDeleteClick = () => {
    console.log(this.props._id);
    this.props.openDeleteTagModal(this.props._id);
  };

  render() {
    const { isEdit, name, color } = this.state;

    const title = isEdit ? (
      <p>{name}</p>
    ) : (
      <Input value={name} placeholder="Title" onChange={this.onChange}/>
    );

    const primaryButton = isEdit ? (
      <Button ghost type="primary" onClick={this.onPrimaryClick}>
        Edit
      </Button>
    ) : (
      <Button type="primary" onClick={this.onPrimaryClick}>
        Save
      </Button>
    );

    const colorContainer = isEdit ? (
      <div
        style={{
          width: "24px",
          height: "24px",
          backgroundColor: color
        }}
      />
    ) : (
      <div style={{ width: "75px" }}>
        <ColorPicker color={color} updateColor={this.updateColor}/>
      </div>
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
        {colorContainer}
      </List.Item>
    );
  }
}

export default connect(null, { openDeleteTagModal, updateTag })(Tag);
