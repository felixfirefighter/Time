import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL,
  OPEN_DELETE_TAG_MODAL,
  CLOSE_DELETE_TAG_MODAL,
  DELETE_EVENT,
  DELETE_TAG,
} from "../actions/types";

const initialState = {
  modalIsOpen: false,
  openNew: false,

  deleteModalIsOpen: false,
  deleteTagModalIsOpen: false,

  deleteTagId: "",
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


    case OPEN_DELETE_TAG_MODAL:
      return {
        ...state,
        deleteTagModalIsOpen: true,
        deleteTagId: action.payload,
      }
    case CLOSE_DELETE_TAG_MODAL:
      return{
        ...state,
        deleteTagModalIsOpen: false,
      }
    case DELETE_TAG:
      return {
        ...state,
        deleteTagModalIsOpen: false,
      }
    default:
      return state;
  }
};
