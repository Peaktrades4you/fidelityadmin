import UseFetch from "../../Hooks/UseFetch";
import {
  EDIT_PROFILE,
  EDIT_PROFILE_ERROR,
  EDIT_PROFILE_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
} from "./ActionTypes";

const getProfile = () => ({
  type: GET_PROFILE,
});

const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  payload: data,
});

const getProfileError = (error) => ({
  type: GET_PROFILE_SUCCESS,
  payload: error,
});

const editProfile = () => ({
  type: EDIT_PROFILE,
});

const editProfileSuccess = (data) => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: data,
});

const editProfileError = (error) => ({
  type: EDIT_PROFILE_ERROR,
  payload: error,
});

export const handleGetProfile = () => async (dispatch) => {
  dispatch(getProfile());
  try {
    const response = await UseFetch(`profile`, "get");
    console.log(response, "user response");
    const data = await response.json();
    console.log(data);
    dispatch(getProfileSuccess(data));
  } catch (error) {
    dispatch(getProfileError(error));
  }
};

export const handleEditProfile = (body) => async (dispatch) => {
  dispatch(editProfile());
  try {
    const response = await UseFetch(`profile/update`, "put", body);
    console.log(response, "user response");
    const data = await response.json();
    console.log(data);
    dispatch(editProfileSuccess(data));
  } catch (error) {
    dispatch(editProfileError(error));
  }
};
