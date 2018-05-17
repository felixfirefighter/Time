import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
  modalIsOpen: false,
  slotDates: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        slotDates: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false
      };
    default:
      return state;
  }
};
