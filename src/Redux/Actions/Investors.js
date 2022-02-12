import UseFetch from "../../Hooks/UseFetch";
import {
  GET_INVESTORS,
  GET_INVESTORS_ERROR,
  GET_INVESTORS_SUCCESS,
} from "./ActionTypes";

const getInvestors = () => ({
  type: GET_INVESTORS,
});

const getInvestorsSuccess = (data) => ({
  type: GET_INVESTORS_SUCCESS,
  payload: data,
});

const getInvestorsError = (error) => ({
  type: GET_INVESTORS_ERROR,
  payload: error,
});

export const handleGetInvestors = () => async (dispatch) => {
  dispatch(getInvestors());
  try {
    const response = await UseFetch(`users/plan`, "get");
    console.log(response, "user response");
    const data = await response.json();
    console.log(data);
    dispatch(getInvestorsSuccess(data));
  } catch (error) {
    dispatch(getInvestorsError(error));
  }
};
