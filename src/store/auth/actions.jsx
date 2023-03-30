import axios from "axios";
import {
  DO_LOGIN,
  DO_LOGIN_OK,
  DO_LOGIN_FAIL,
  DO_LOGOUT,
  DO_LOGOUT_OK,
  DO_LOGOUT_FAIL,
} from "./actionTypes";

// I send the login request to the backend
export function actionDoLogin(loginData) {
  return {
    type: DO_LOGIN,
    payload: loginData,
  };
}
// successful response from backend = I obtain user details + unique token
export function actionDoLoginOk(userDetails) {
  return {
    type: DO_LOGIN_OK,
    payload: userDetails,
  };
}
// unsuccessful response from backend = I obtain an error message
export function actionDoLoginFail(error) {
  return {
    type: DO_LOGIN_FAIL,
    payload: error,
  };
}

// try-catch function which unifies all the above actions in order to send my request to backend
export function doLogin(userData) {
  return async (dispatch) => {
    try {
      dispatch(actionDoLogin(userData));
      // we use axios.post because we are sending information instead of receiving it as we did for the other sections of the store
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        userData
      );
      dispatch(actionDoLoginOk(response.data));
    } catch (error) {
      dispatch(actionDoLoginFail(error));
    }
  };
}

export function actionDoLogout() {
  return {
    type: DO_LOGOUT,
  };
}
export function actionDoLogoutOk() {
  return {
    type: DO_LOGOUT_OK,
  };
}
export function actionDoLogoutFail(error) {
  return {
    type: DO_LOGOUT_FAIL,
    payload: error,
  };
}

// try-catch function which unifies all the above actions in order to send my request to backend
export function doLogout() {
  return async (dispatch) => {
    try {
      dispatch(actionDoLogout());
      dispatch(actionDoLoginOk());
    } catch (error) {
      dispatch(actionDoLoginFail(error));
    }
  };
}
