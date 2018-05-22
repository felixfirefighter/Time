import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
  modalIsOpen: false,
  openNew: false
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
    default:
      return state;
  }
};
