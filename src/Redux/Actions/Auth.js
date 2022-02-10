import UseFetch from "../../Hooks/UseFetch";
import { AUTHENTICATION, AUTHENTICATION_SUCCESS } from "./ActionTypes";

const handleAuth = () => ({
  type: AUTHENTICATION,
});

const handleAuthSuccess = (data) => ({
  type: AUTHENTICATION_SUCCESS,
  payload: data,
});

const handleAuthError = (error) => ({
  type: AUTHENTICATION_SUCCESS,
  payload: error,
});

export const handleUserAuth = (body) => async (dispatch) => {
  dispatch(handleAuth());
  try {
    const response = await UseFetch("auth/login", "post", body);
    console.log(response, "response");
    const data = await response.json();
    console.log(data, "data");
    if (response.ok) {
      localStorage.setItem("token", data.access_token);
      dispatch(handleAuthSuccess(data));
      // alert("first");
    } else {
      dispatch(handleAuthError());
    }
  } catch (error) {
    dispatch(handleAuthError(error));
  }
};
