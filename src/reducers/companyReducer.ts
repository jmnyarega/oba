import { CompanyAction } from "../actions/companyActions";

export type State = {
  company: {
    name: string;
    accSoftware: string;
    address: string;
    abbr: string;
    cop: string;
    country: string;
    entity: string;
    sales: string;
  };
};

const companyReducer = (state = [], action: any) => {
  switch (action.type) {
    case CompanyAction.ADD_COMPANY_SUCCESS: {
      return {
        ...state,
        company: action.payload,
        pending: false,
        message: "success",
      };
    }
    case CompanyAction.ADD_COMPANY_PENDING: {
      return {
        ...state,
        pending: true,
      };
    }
    case CompanyAction.ADD_COMPANY_FAIL: {
      return {
        ...state,
        pending: false,
        message: action.message,
      };
    }
    case CompanyAction.GET_COMPANY_PENDING: {
      return {
        ...state,
        pending: true,
        message: action.message,
      };
    }
    case CompanyAction.GET_COMPANY_SUCCESS: {
      return {
        ...state,
        pending: false,
        payload: action.payload,
      };
    }
    case CompanyAction.GET_COMPANY_FAIL: {
      return {
        ...state,
        pending: false,
        payload: action.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default companyReducer;
