import { FileAction } from "../actions/fileActions";

export type State = {
  transactions: {
    name: string;
    cop: string;
    country: string;
    address: string;
    abbr: string;
    accSoftware: string;
    entity: string;
    sales: string;
  };
};

const transactionsReducer = (state = [], action: any) => {
  switch (action.type) {
    case FileAction.GET_TRANSACTION_SUCCESS: {
      return action.payload;
    }
    case FileAction.GET_TRANSACTION_PENDING: {
      return {
        ...state,
        transactions: [],
        message: action.message,
        pending: true,
      };
    }
    case FileAction.GET_TRANSACTION_FAIL: {
      return {
        ...state,
        message: action.message,
        transactions: [],
        pending: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default transactionsReducer;
