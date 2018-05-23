import React, { Component } from "react";
import { Form, Button, Row, Col } from "antd";

import { connect } from "react-redux";

import { closeDeleteModal } from "../../actions/modalActions";
import { deleteEvent } from "../../actions/eventActions";

class DeleteConfirmationForm extends Component {
  state = {
    loading: false
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.props.deleteEvent(this.props.event.form._id);
  };

  onCancelClick = () => {
    this.props.closeDeleteModal();
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h1>Are you sure?</h1>
        <p>You are about to delete the event and this cannot be undone.</p>

        <Row type="flex" justify="space-between">
          <Col>
            <Button htmlType="button" onClick={this.onCancelClick}>
              Cancel
            </Button>
          </Col>
          <Col>
            <Button
              type="danger"
              loading={this.state.loading}
              htmlType="submit"
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event
});

const WrappedDeleteConfirmationForm = Form.create()(DeleteConfirmationForm);

export default connect(mapStateToProps, { closeDeleteModal, deleteEvent })(
  WrappedDeleteConfirmationForm
);
