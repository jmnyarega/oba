import { CompanyDetails } from "../../../actions/companyActions";
import { State } from "../../../reducers/companyReducer";

export type CompanyTypes = {
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  handleName(event: React.FormEvent<HTMLInputElement>): void;
  handleAbbr(event: React.FormEvent<HTMLInputElement>): void;
  handleAddress(event: React.FormEvent<HTMLInputElement>): void;
  handleCop(event: React.FormEvent<HTMLInputElement>): void;
  handleCountry(event: React.FormEvent<HTMLInputElement>): void;
  handleEntity(event: React.FormEvent<HTMLInputElement>): void;
  handleAccSoftware(event: React.FormEvent<HTMLInputElement>): void;
  handleSales(event: React.FormEvent<HTMLInputElement>): void;
  message: string;
  pending: boolean;
};

export type DispatchProps = {
  addCompany: (data: CompanyDetails) => void;
};

export type StateProps = {
  company: State;
};
