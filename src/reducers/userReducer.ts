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

const userReducer = (state = initialReducer.login, action: any) => {
  switch (action.type) {
    case UserAction.LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload,
        message: action.message,
        pending: false,
      };
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

    case UserAction.GET_LOGIN_DETAILS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
