import { Dispatch } from "redux";
import baseUrl from "../helpers/baseUrl";
import { http } from "../helpers/auth";

export enum CompanyAction {
  ADD_COMPANY_SUCCESS = "ADD_COMPANY_SUCCESS",
  ADD_COMPANY_PENDING = "ADD_COMPANY_PENDING",
  ADD_COMPANY_FAIL = "ADD_COMPANY__FAIL",
  GET_COMPANY_SUCCESS = "GET_COMPANY_SUCCESS",
  GET_COMPANY_PENDING = "GET_COMPANY_PENDING",
  GET_COMPANY_FAIL = "GET_COMPANY_FAIL",
}
export type Action = {
  type: CompanyAction;
  payload: any;
  message?: string;
};

export type CompanyDetails = {
  name: string;
  accSoftware: string;
  address: string;
  abbr: string;
  cop: string;
  country: string;
  entity: string;
  sales: string;
};

export const addCompanyPending = () => {
  return {
    type: CompanyAction.ADD_COMPANY_PENDING,
  };
};

export const addCompanySuccess = (payload: any) => {
  return {
    payload,
    type: CompanyAction.ADD_COMPANY_SUCCESS,
  };
};

export const addCompanyFail = (message: string) => {
  return {
    message,
    type: CompanyAction.ADD_COMPANY_FAIL,
  };
};

export const getCompanySuccess = (payload: any) => ({
  type: CompanyAction.GET_COMPANY_SUCCESS,
  payload,
});

export const getCompanyPending = () => ({
  type: CompanyAction.GET_COMPANY_PENDING,
});

export const getCompanyError = (message: string) => ({
  type: CompanyAction.GET_COMPANY_FAIL,
  message,
});

export const addCompany = (data: CompanyDetails): any => {
  return (dispatch: Dispatch) => {
    dispatch(addCompanyPending());
    return http()
      .post(`${baseUrl}/company`, data)
      .then((res) => {
        dispatch(addCompanySuccess(res.data));
      })
      .catch((err) => dispatch(addCompanyFail("failed")));
  };
};

export const getCompany = (): any => {
  return (dispatch: Dispatch) => {
    dispatch(getCompanyPending());
    return http()
      .get(`${baseUrl}/company`)
      .then((res) => {
        dispatch(getCompanySuccess(res.data));
      })
      .catch((err) => getCompanyError(err.message));
  };
};
