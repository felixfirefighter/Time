import React, { Component } from "react";
import { Form, Button, Row, Col } from "antd";

import { connect } from "react-redux";

import { closeDeleteTagModal } from "../../actions/modalActions";
import { deleteTag } from "../../actions/tagActions";

class DeleteTagConfirmationForm extends Component {
  state = {
    loading: false
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    console.log(this.props.modal.deleteTagId)
    this.props.deleteTag(this.props.modal.deleteTagId);
  };

  onCancelClick = () => {
    this.props.closeDeleteTagModal();
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <h1>Are you sure?</h1>
        <p>Deleting the tag will also remove all the events associated with it. This cannot be undone.</p>

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

const WrappedDeleteTagConfirmationForm = Form.create()(DeleteTagConfirmationForm);

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps, { deleteTag, closeDeleteTagModal })(
  WrappedDeleteTagConfirmationForm
);
