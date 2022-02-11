import UseFetch from "../../Hooks/UseFetch";
import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USER_DETAILS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_SUCCESS,
} from "./ActionTypes";

const getUsers = () => ({
  type: GET_USERS,
});

const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users,
});

const getUsersError = (error) => ({
  type: GET_USERS_ERROR,
  payload: error,
});

const getUserDetails = () => ({
  type: GET_USER_DETAILS,
});

const getUserDetailsSuccess = (users) => ({
  type: GET_USER_DETAILS_SUCCESS,
  payload: users,
});

const getUserDetailsError = (error) => ({
  type: GET_USER_DETAILS_ERROR,
  payload: error,
});

export const handleGetUsers = (pagenum) => async (dispatch) => {
  dispatch(getUsers());
  try {
    const response = await UseFetch(`users?page=${pagenum}&size=20`, "get");
    console.log(response, "user response");
    const data = await response.json();
    console.log(data);
    dispatch(getUsersSuccess(data));
  } catch (error) {
    dispatch(getUsersError(error));
  }
};

export const handleGetUserDetails = (uin) => async (dispatch) => {
  dispatch(getUserDetails());
  try {
    const response = await UseFetch(`user/${uin}`, "get");
    console.log(response, "user response");
    const data = await response.json();
    console.log(data);
    await dispatch(getUserDetailsSuccess(data));
  } catch (error) {
    dispatch(getUserDetailsError(error));
  }
};
