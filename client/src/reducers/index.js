import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import modalReducer from "./modalReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  event: eventReducer,
  modal: modalReducer,
  error: errorReducer
});
