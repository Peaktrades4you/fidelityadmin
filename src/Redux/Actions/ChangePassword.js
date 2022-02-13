import UseFetch from "../../Hooks/UseFetch";
import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  EDIT_PROFILE,
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
} from "./ActionTypes";

const changePassword = () => ({
  type: CHANGE_PASSWORD,
});

const changePasswordSuccess = (data) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: data,
});

const changePasswordError = (error) => ({
  type: CHANGE_PASSWORD_ERROR,
  payload: error,
});

export const handleChangePassword = (body) => async (dispatch) => {
  dispatch(changePassword());
  try {
    const response = await UseFetch(`profile/change-password`, "put", body);
    console.log(response, "user response");
    const data = await response.json();
    console.log(data);
    dispatch(changePasswordSuccess(data));
  } catch (error) {
    dispatch(changePasswordError(error));
  }
};
