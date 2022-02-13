import {
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD,
} from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const ChangePassword = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
