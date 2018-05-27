import { GET_TAGS, RESET_TAG, ADD_TAG, UPDATE_TAG, DELETE_TAG } from "../actions/types";

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
    case UPDATE_TAG:
      return {
        ...state,
        tags: state.tags.map(tag => (tag._id === action.payload._id) ? action.payload : tag)
      }
    case DELETE_TAG:
      return{
        ...state,
        tags: state.tags.filter(tag => tag._id !== action.payload._id)
        
      }
    case RESET_TAG:
      return {
        ...state,
        tag: {}
      };
    
    default:
      return state;
  }
};
