import {
  EDIT_PROFILE,
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PROFILE_SUCCESS,
} from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const Profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case GET_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case EDIT_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case EDIT_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
