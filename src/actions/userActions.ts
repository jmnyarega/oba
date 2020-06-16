import { Dispatch } from "redux";
import baseUrl from "../helpers/baseUrl";
import { http, addTokenToLocalStorage, decodeUser } from "../helpers/auth";

export enum UserAction {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_PENDING = "LOGIN_PENDING",
  LOGIN_FAIL = "LOGIN_FAIL",
  GET_LOGIN_DETAILS = "GET_LOGIN_DETAILS",
  SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
  SIGNUP_PENDING = "SIGNUP_PENDING",
  SIGNUP_FAIL = "SIGNUP_FAIL",
}

export type Action = {
  type: UserAction;
  payload: any;
  message?: string;
};

export type SignUpDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export type LoginDetails = {
  email: string;
  password: string;
};

export const userSignUpPending = () => {
  return {
    type: UserAction.SIGNUP_PENDING,
  };
};

export const userSignUpSucess = (payload: any) => {
  return {
    payload,
    type: UserAction.SIGNUP_SUCCESS,
  };
};

export const userSigninFail = (message: string) => {
  return {
    message,
    type: UserAction.LOGIN_FAIL,
  };
};

export const userSigninPending = () => {
  return {
    type: UserAction.LOGIN_PENDING,
  };
};

export const userSigninSucess = (payload: any) => {
  return {
    payload,
    type: UserAction.LOGIN_SUCCESS,
  };
};

export const userSignUpFail = (message: string) => {
  return {
    message,
    type: UserAction.SIGNUP_FAIL,
  };
};

export const getUserDataSuccess = (payload: any) => {
  return {
    type: UserAction.GET_LOGIN_DETAILS,
    payload,
  };
};

export const userLogin = (loginDetails: LoginDetails): any => {
  return (dispatch: Dispatch) => {
    dispatch(userSigninPending());
    return http()
      .post(`${baseUrl}/login`, loginDetails)
      .then((res) => {
        dispatch(userSigninSucess(res.data));
        addTokenToLocalStorage(res.data.token);
      })
      .catch((err) => dispatch(userSigninFail(err.message)));
  };
};

export const getUserData = (): any => {
  return (dispatch: Dispatch) => {
    const data = decodeUser();
    dispatch(getUserDataSuccess(data));
  };
};

export const userSignUp = (signUpDetails: SignUpDetails): any => {
  return (dispatch: Dispatch) => {
    dispatch(userSignUpPending());
    return http()
      .post(`${baseUrl}/signup`, signUpDetails)
      .then((res) => {
        dispatch(userSignUpSucess(res.data));
        addTokenToLocalStorage(res.data.token);
      })
      .catch((err) => dispatch(userSignUpFail("failed")));
  };
};
