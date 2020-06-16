import { UserAction } from "../actions/userActions";

export type State = {
  currentUser: {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    email?: string;
    message?: string;
  };
};

const currentUserReducer = (state = [], action: any) => {
  switch (action.type) {
    case UserAction.GET_LOGIN_DETAILS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default currentUserReducer;
