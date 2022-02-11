import {
  GET_USER_WALLET,
  GET_USER_WALLET_SUCCESS,
} from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  error: null,
  data: {},
};
export const wallet = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_WALLET:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_WALLET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_USER_WALLET:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
