import {
  GET_EVENTS,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  EVENT_LOADING,
  UPDATE_EVENT_FORM,
  CLEAR_EVENT_FORM,
  SET_FORM_COLOR_WITH_TAG
} from "../actions/types";

const initialState = {
  events: [],
  loading: false,
  form: {
    _id: "",
    title: "",
    start: "",
    end: "",
    name: "",
    color: "#0000ee"
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
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(
          event => (event._id === action.payload._id ? action.payload : event)
        )
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event._id !== action.payload._id)
      };
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };
    case SET_FORM_COLOR_WITH_TAG:
      return {
        ...state,
        form: {
          ...state.form,
          ...action.payload
        }
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
          _id: "",
          title: "",
          name: ""
        }
      };
    default:
      return state;
  }
};
