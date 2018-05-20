import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import modalReducer from "./modalReducer";
import errorReducer from "./errorReducer";
import tagReducer from "./tagReducer";

export default combineReducers({
  event: eventReducer,
  modal: modalReducer,
  error: errorReducer,
  tag: tagReducer
});
