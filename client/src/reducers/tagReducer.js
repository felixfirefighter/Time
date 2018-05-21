import { GET_TAGS, GET_TAG_BY_NAME, RESET_TAG } from "../actions/types";

const initialState = {
  tags: [],
  tag: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGS:
      return {
        ...state,
        tags: action.payload
      };
    case RESET_TAG:
      return {
        ...state,
        tag: {}
      };
    default:
      return state;
  }
};
