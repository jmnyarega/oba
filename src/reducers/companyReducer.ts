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

const initialReducer: State = {
  company: {
    name: "Powered by People",
    accSoftware: "Quickbooks",
    address: "1009, NRB",
    abbr: "PBP",
    cop: "Kenya",
    country: "Kenya",
    entity: "Retail",
    sales: "100",
  },
};

const companyReducer = (state = initialReducer.company, action: any) => {
  switch (action.type) {
    case CompanyAction.ADD_COMPANY_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default companyReducer;
