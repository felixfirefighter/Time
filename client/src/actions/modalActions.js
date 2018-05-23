import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_DELETE_MODAL
} from "./types";

export const openModal = payload => {
  return {
    type: OPEN_MODAL,
    payload
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const openDeleteModal = () => {
  return {
    type: OPEN_DELETE_MODAL
  };
};

export const closeDeleteModal = () => {
  return {
    type: CLOSE_DELETE_MODAL
  };
};
