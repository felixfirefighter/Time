import axios from "axios";

import { GET_ERRORS, ADD_EVENT, GET_EVENTS, EVENT_LOADING } from "./types";

export const addEvent = eventData => dispatch => {
  console.log(eventData);
  axios.post("/api/events", eventData).then(res => {
    console.log(res);
    dispatch({ type: ADD_EVENT, payload: res.data });
  });
};

export const getEvents = () => dispatch => {
  dispatch(setEventLoading());
  axios
    .get("/api/events")
    .then(res =>
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setEventLoading = () => {
  return {
    type: EVENT_LOADING
  };
};
