export enum CompanyAction {
  ADD_COMPANY_SUCCESS = "ADD_COMPANY_SUCCESS",
  ADD_COMPANY_PENDING = "ADD_COMPANY_PENDING",
  ADD_COMPANY_FAIL = "ADD_COMPANY__FAIL",
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

export const addCompany = (company: CompanyDetails): Action => ({
  type: CompanyAction.ADD_COMPANY_SUCCESS,
  payload: {
    name: company.name,
    accSoftware: company.accSoftware,
    address: company.address,
    abbr: company.abbr,
    cop: company.cop,
    country: company.country,
    entity: company.entity,
    sales: company.sales,
  },
  message: "Add successful",
});
