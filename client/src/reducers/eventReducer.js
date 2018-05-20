import {
  GET_EVENTS,
  ADD_EVENT,
  EVENT_LOADING,
  UPDATE_EVENT_FORM,
  CLEAR_EVENT_FORM
} from "../actions/types";

const initialState = {
  events: [],
  loading: false,
  form: {
    title: "",
    start: "",
    end: "",
    name: "",
    color: "#ee0000"
  }
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
    case UPDATE_EVENT_FORM:
      return {
        ...state,
        form: { ...state.form, ...action.payload }
      };
    case CLEAR_EVENT_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          title: "",
          name: ""
        }
      };
    default:
      return state;
  }
};
