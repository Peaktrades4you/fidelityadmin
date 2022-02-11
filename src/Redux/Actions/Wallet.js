import UseFetch from "../../Hooks/UseFetch";
import {
  EDIT_USER_WALLET,
  EDIT_USER_WALLET_ERROR,
  EDIT_USER_WALLET_SUCCESS,
} from "./ActionTypes";

const editUserWallet = () => ({
  type: EDIT_USER_WALLET,
});

const editUserWalletSuccess = (data) => ({
  type: EDIT_USER_WALLET_SUCCESS,
  payload: data,
});

const editUserWalletError = (error) => ({
  type: EDIT_USER_WALLET_ERROR,
  payload: error,
});

export const handleEditUserWallet = (uin, body) => async (dispatch) => {
  dispatch(editUserWallet());
  try {
    const response = await UseFetch(`user/${uin}/wallet`, "put", body);
    console.log(response, "user response");
    const data = await response.json();
    console.log(data);
    dispatch(editUserWalletSuccess(data));
  } catch (error) {
    dispatch(editUserWalletError(error));
  }
};
