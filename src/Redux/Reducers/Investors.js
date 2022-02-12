import {
  GET_INVESTORS,
  GET_INVESTORS_ERROR,
  GET_INVESTORS_SUCCESS,
} from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const Investors = (state = initialState, action) => {
  switch (action.type) {
    case GET_INVESTORS:
      return {
        ...state,
        loading: true,
      };
    case GET_INVESTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_INVESTORS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
