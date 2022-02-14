import UseFetch from "../../Hooks/UseFetch";
import {
  GET_INVESTORS,
  GET_INVESTORS_ERROR,
  GET_INVESTORS_SUCCESS,
  GET_INVESTOR_PLAN,
  GET_INVESTOR_PLAN_ERROR,
  GET_INVESTOR_PLAN_SUCCESS,
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

const getInvestorPlan = () => ({
  type: GET_INVESTOR_PLAN,
});

const getInvestorPlanSuccess = (data) => ({
  type: GET_INVESTOR_PLAN_SUCCESS,
  payload: data,
});

const getInvestorPlanError = (error) => ({
  type: GET_INVESTOR_PLAN_ERROR,
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

export const handleGetInvestorPlan = (uin) => async (dispatch) => {
  dispatch(getInvestorPlan());
  try {
    const response = await UseFetch(`user/${uin}/plans`, "get");
    console.log(response, "user response");
    const data = await response.json();
    console.log(data);
    dispatch(getInvestorPlanSuccess(data));
  } catch (error) {
    dispatch(getInvestorPlanError(error));
  }
};
