import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  event: eventReducer,
  modal: modalReducer
});
