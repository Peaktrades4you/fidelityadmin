import {
  GET_INVESTORS,
  GET_INVESTORS_ERROR,
  GET_INVESTORS_SUCCESS,
  GET_INVESTOR_PLAN,
  GET_INVESTOR_PLAN_ERROR,
  GET_INVESTOR_PLAN_SUCCESS,
} from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  data: [],
  plans: [],
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

    case GET_INVESTOR_PLAN:
      return {
        ...state,
        loading: true,
      };
    case GET_INVESTOR_PLAN_SUCCESS:
      return {
        ...state,
        loading: false,
        plans: action.payload,
      };
    case GET_INVESTOR_PLAN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
