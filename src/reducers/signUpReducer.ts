import { UserAction } from "../actions/userActions";

export type State = {
  signup: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    confirmPassword: string;
    email: string;
    password: string;
    message?: string;
  };
};

const initialReducer: State = {
  signup: {
    firstName: "john",
    lastName: "doe",
    phoneNumber: "257000000",
    confirmPassword: "pass",
    email: "johndoe@gmail.com",
    password: "pass",
    message: "",
  },
};

const signUpReducer = (state = initialReducer.signup, action: any) => {
  switch (action.type) {
    case UserAction.SIGNUP_SUCCESS: {
      return action.payload;
    }
    case UserAction.SIGNUP_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case UserAction.SIGNUP_FAIL: {
      return {
        ...state,
        pending: false,
        message: action.message,
      };
    }
    default:
      return state;
  }
};

export default signUpReducer;
