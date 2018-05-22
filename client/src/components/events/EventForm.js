import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Select, Row, Col } from "antd";

import ColorPicker from "../common/ColorPicker";

import {
  updateEventForm,
  setFormColorWithTag
} from "../../actions/eventActions";
import { getTags } from "../../actions/tagActions";

class EventForm extends Component {
  componentDidMount() {
    this.props.getTags();
  }

  onInputChange = event => {
    this.props.updateEventForm({ [event.target.name]: event.target.value });
  };

  onSelectChange = value => {
    this.props.updateEventForm({ name: value });
  };

  onSelect = (value, option) => {
    //change color on select
    const selectedTag = this.props.tag.tags.find(tag => tag.name === value);

    this.props.setFormColorWithTag({ color: selectedTag.color });
  };

  onSubmit = e => {
    e.preventDefault();

    const { getFieldsValue, validateFields, setFieldsValue } = this.props.form;

    validateFields((err, values) => {
      if (!err) {
        setFieldsValue({
          color: this.props.event.form.color
        });

        //if it is openNew, it is a new event
        //if not, we want to update the event
        if (this.props.openNew) {
          this.props.addEvent(getFieldsValue());
        } else {
          this.props.updateEvent(this.props.event.form._id, getFieldsValue());
        }

        //close the modal after submitting
        this.props.closeModal();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    let tags;
    if (this.props.tag) {
      tags = this.props.tag.tags.map(tag => {
        return (
          <Select.Option key={tag.name} value={tag.name}>
            {tag.name}
          </Select.Option>
        );
      });
    }

    const deleteButton = !this.props.openNew ? (
      <Col>
        <Button type="danger" htmlType="button">
          Delete
        </Button>
      </Col>
    ) : null;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Item>
          {getFieldDecorator("title", {
            rules: [
              {
                required: true,
                message: "Title is required"
              }
            ]
          })(
            <Input
              placeholder="Title"
              name="title"
              onChange={this.onInputChange}
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("start", {
            rules: [
              {
                required: true,
                message: "Start Date is required"
              }
            ]
          })(<Input placeholder="Start Date" disabled />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("end", {
            rules: [
              {
                required: true,
                message: "End Date is required"
              }
            ]
          })(<Input placeholder="End Date" disabled />)}
        </Form.Item>

        <Row type="flex" gutter={8} align="middle">
          <Col span={20}>
            <Form.Item>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Tag name is required"
                  }
                ]
              })(
                <Select
                  mode="combobox"
                  placeholder="Add or select tag"
                  onChange={this.onSelectChange}
                  onSelect={this.onSelect}
                >
                  {tags}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            {getFieldDecorator("color")(<input type="hidden" />)}
            <Form.Item>
              <ColorPicker />
            </Form.Item>
          </Col>
        </Row>
        <Row type="flex" justify="space-between">
          <Col>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Col>
          {deleteButton}
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event,
  tag: state.tag
});

export default connect(mapStateToProps, {
  getTags,
  setFormColorWithTag,
  updateEventForm
})(EventForm);
