import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const CreateEventForm = Form.create({
  mapPropsToFields(props) {
    return {
      start: Form.createFormField({
        value: props.start
      }),
      end: Form.createFormField({
        value: props.end
      })
    };
  }
})(
  class Inner extends Component {
    onSubmit = e => {
      e.preventDefault();

      const { getFieldsValue, validateFields } = this.props.form;

      console.log("Submit");

      validateFields((err, values) => {
        if (!err) {
          console.log(getFieldsValue());
          this.props.addEvent(getFieldsValue());
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
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
            })(<Input placeholder="Title" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("start", {
              rules: [
                {
                  required: true,
                  message: "Start Date is required"
                }
              ]
            })(<Input placeholder="Start Date" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("end", {
              rules: [
                {
                  required: true,
                  message: "End Date is required"
                }
              ]
            })(<Input placeholder="End Date" />)}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      );
    }
  }
);

export default CreateEventForm;
