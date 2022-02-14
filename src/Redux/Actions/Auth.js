import axios from "axios";
import UseFetch from "../../Hooks/UseFetch";
// import axios from "axios";
import {
  AUTHENTICATION,
  AUTHENTICATION_ERROR,
  AUTHENTICATION_SUCCESS,
} from "./ActionTypes";

const handleAuth = () => ({
  type: AUTHENTICATION,
});

const handleAuthSuccess = (data) => ({
  type: AUTHENTICATION_SUCCESS,
  payload: data,
});

const handleAuthError = (error) => ({
  type: AUTHENTICATION_ERROR,
  payload: error,
});

export const handleUserAuth = (body) => async (dispatch) => {
  dispatch(handleAuth());
  try {
    const response = await axios({
      url: "https://fidelity-trades.herokuapp.com/admin/auth/login",
      method: "POST",
      data: body,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${
          localStorage.getItem("token") ? localStorage.getItem("token") : ""
        }`,
      },
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("hasBeenAuthenticated", true);
      localStorage.setItem("admin", JSON.stringify(response.data.admin));

      dispatch(handleAuthSuccess(response.data));
    }
  } catch (error) {
    dispatch(handleAuthError(error.message));
  }
};
