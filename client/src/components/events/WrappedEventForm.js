import { Form } from "antd";

import EventForm from "./EventForm";

const WrappedEventForm = Form.create({
  mapPropsToFields(props) {
    return {
      title: Form.createFormField({
        value: props.title
      }),
      start: Form.createFormField({
        value: props.start
      }),
      end: Form.createFormField({
        value: props.end
      }),
      name: Form.createFormField({
        value: props.name
      }),
      color: Form.createFormField({
        value: props.color
      })
    };
  }
})(EventForm);

export default WrappedEventForm;
