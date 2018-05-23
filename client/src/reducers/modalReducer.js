import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  DELETE_EVENT
} from "../actions/types";

const initialState = {
  modalIsOpen: false,
  openNew: false,

  deleteModalIsOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        openNew: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        form: {}
      };
    case OPEN_DELETE_MODAL:
      return {
        ...state,
        deleteModalIsOpen: true
      };
    case CLOSE_DELETE_MODAL:
      return {
        ...state,
        deleteModalIsOpen: false
      };
    case DELETE_EVENT:
      return {
        ...state,
        deleteModalIsOpen: false,
        modalIsOpen: false
      };
    default:
      return state;
  }
};
