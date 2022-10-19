import * as types from "./actionTypes";

const initState = {
  bmi: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.BMI_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.BMI_SUCCESS:
      return {
        ...state,
        bmi:payload,
        isLoading: false,
        isError: false,
      };
    case types.BMI_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
