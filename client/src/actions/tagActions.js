import axios from "axios";

import { GET_TAG_BY_NAME, GET_TAGS, ADD_TAG, UPDATE_TAG, DELETE_TAG, GET_ERRORS } from "./types";

export const getTags = () => dispatch => {
  axios
    .get("/api/tags")
    .then(res =>
      dispatch({
        type: GET_TAGS,
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

export const getTagByName = name => dispatch => {
  axios
    .get(`/api/tags/${name}`)
    .then(res =>
      dispatch({
        type: GET_TAG_BY_NAME,
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

export const deleteTag = id => dispatch =>{
  axios.delete(`/api/tags/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_TAG,
        payload: res.data
      })).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }))
}
