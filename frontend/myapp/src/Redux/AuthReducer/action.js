import * as types from "./actionTypes";
import axios from "axios";


const register = (payload) => (dispatch) => {
  //console.log(payload)
  dispatch({ type: types.SIGNUP_REQUEST });
  axios
    .post("https://serene-atoll-13008.herokuapp.com/user/signup", payload)
    .then((r) => {
      dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data });
    })
    .catch((e) => {
      dispatch({ type: types.SIGNUP_FAILURE,payload:e });
    });
};

const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("https://serene-atoll-13008.herokuapp.com/user/login", params)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
    });
};


export {login,register };