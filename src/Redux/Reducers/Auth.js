import {
  AUTHENTICATION,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
} from "../Actions/ActionTypes";

// const auth = JSON.parse(localStorage.getItem("token"));

const initialState = {
  loading: false,
  data: {},
  error: null,
  auth: JSON.parse(localStorage.getItem("hasBeenAuthenticated")) ? true : false,
};

export const Auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {
        ...state,
        loading: true,
      };

    case AUTHENTICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        auth: true,
      };

    case AUTHENTICATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        auth: false,
      };
    default:
      return state;
  }
};
