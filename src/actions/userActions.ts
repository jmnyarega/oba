export enum UserAction {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_PENDING = "LOGIN_PENDING",
  LOGIN_FAIL = "LOGIN_FAIL",
  GET_LOGIN_DETAILS = "GET_LOGIN_DETAILS",
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

export const userLogin = (loginDetails: LoginDetails): Action => ({
  type: UserAction.LOGIN_SUCCESS,
  payload: {
    email: loginDetails.email,
    password: loginDetails.password,
  },
  message: "login successful",
});

export const userSignUp = (signUpDetails: SignUpDetails): Action => ({
  type: UserAction.GET_LOGIN_DETAILS,
  payload: {
    firstName: signUpDetails.firstName,
    lastName: signUpDetails.lastName,
    email: signUpDetails.email,
    phoneNumber: signUpDetails.phoneNumber,
    password: signUpDetails.password,
    confirmPassword: signUpDetails.confirmPassword,
  },
  message: "signup successful",
});
