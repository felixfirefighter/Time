import React, { Component } from "react";

import { List, Button } from "antd";
import Spinner from "../common/Spinner";

import { getTags } from "../../actions/tagActions";

import { connect } from "react-redux";

import Tag from "./Tag";

class Tags extends Component {
  componentDidMount() {
    this.props.getTags();
  }

  render() {
    const {tags} = this.props.tag;

    let list;
    if (tags.length == 0) {
      list = <Spinner />;
    } else {
      list = (
        <List
          itemLayout="horizontal"
          dataSource={tags}
          renderItem={item => <Tag _id={item._id} name={item.name} color={item.color} _id={item._id}/>}
        />
      );
    }

    return <div>{list}</div>;
  }
}

const mapStateToProps = state => ({
  tag: state.tag
});

export default connect(mapStateToProps, { getTags })(Tags);
