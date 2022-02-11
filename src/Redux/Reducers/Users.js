import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USER_DETAILS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_SUCCESS,
} from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  users: [],
  error: null,
  userDetails: [],
};

export const Users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_USER_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };
    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
