import { UserAction } from "../actions/userActions";

export type State = {
  login: {
    email: string;
    password: string;
    message: string;
  };
};

const initialReducer: State = {
  login: {
    email: "johndoe@email.com",
    password: "password",
    message: "",
  },
};

const loginReducer = (state = initialReducer.login, action: any) => {
  switch (action.type) {
    case UserAction.LOGIN_SUCCESS: {
      return action.payload;
    }
    case UserAction.LOGIN_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case UserAction.LOGIN_FAIL: {
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

export default loginReducer;
