import UseFetch from "../../Hooks/UseFetch";
import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from "./ActionTypes";

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
