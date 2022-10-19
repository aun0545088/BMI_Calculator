import * as types from "./actionTypes";
import axios from "axios";

const bmiData = (params) => (dispatch) => {
    dispatch({ type: types.BMI_REQUEST });
    return axios
      .post("https://serene-atoll-13008.herokuapp.com/bmi/create", params)
      .then((r) => {
        dispatch({ type: types.BMI_SUCCESS, payload: r.data });
      })
      .catch((e) => {
        dispatch({ type: types.BMI_FAILURE, payload: e });
      });
  };



export { bmiData};