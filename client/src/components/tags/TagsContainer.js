import React, { Component } from "react";

import {connect} from 'react-redux'

import Tags from './Tags';


import DeleteTagConfirmationModal from './DeleteTagConfirmationModal';

class TagsContainer extends Component {
  render() {
    
    const deleteModal =
      this.props.modal && this.props.modal.deleteTagModalIsOpen ? (
        <DeleteTagConfirmationModal />
      ) : null;
    
    return (
      <div>
        <h1>Tags</h1>
        <Tags/>

        {deleteModal}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
})

export default connect(mapStateToProps)(TagsContainer);
