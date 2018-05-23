import React, { Component } from "react";
import { Modal } from "antd";
import { connect } from "react-redux";

import { closeDeleteModal } from "../../actions/modalActions";

import DeleteConfirmationForm from "./DeleteConfirmationForm";

class DeleteConfirmationModal extends Component {
  render() {
    return (
      <div>
        <Modal
          visible={this.props.modal.deleteModalIsOpen}
          onCancel={this.props.closeDeleteModal}
          footer={null}
        >
          <DeleteConfirmationForm id={this.props.event.form._id} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
  event: state.event
});

export default connect(mapStateToProps, { closeDeleteModal })(
  DeleteConfirmationModal
);
