import { GET_EVENTS, ADD_EVENT, EVENT_LOADING } from "../actions/types";

const initialState = {
  events: [],
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENT_LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        loading: false
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
