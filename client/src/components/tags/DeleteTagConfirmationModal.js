import React, { Component } from "react";
import { Modal } from "antd";
import { connect } from "react-redux";

import { closeDeleteTagModal } from "../../actions/modalActions";

import DeleteTagConfirmationForm from "./DeleteTagConfirmationForm";

class DeleteTagConfirmationModal extends Component {
  render() {
    return (
      <div>
        <Modal
          visible={this.props.modal.deleteTagModalIsOpen}
          onCancel={this.props.closeDeleteTagModal}
          footer={null}
        >
          <DeleteTagConfirmationForm />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps, { closeDeleteTagModal })(
  DeleteTagConfirmationModal
);
