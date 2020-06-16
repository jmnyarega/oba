import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { addCompany } from "../../../actions/companyActions";
import { CompanyDetails } from "../../../actions/companyActions";
import { State } from "../../../reducers/companyReducer";
import { StateProps, DispatchProps } from "./addCompany.types";

import AddCompanyForm from "./addCompanyForm";

type Props = StateProps & DispatchProps;

const AddCompany = (props: Props) => {
  const {
    company: { company },
  } = props;
  //@ts-ignore
  const { message, pending } = company;
  console.log(message, pending);
  const [name, setName] = useState("");
  const [accSoftware, setAccSoftware] = useState("");
  const [address, setAddress] = useState("");
  const [abbr, setAbbr] = useState("");
  const [cop, setCop] = useState("");
  const [country, setCountry] = useState("");
  const [entity, setEntity] = useState("");
  const [sales, setSales] = useState("");

  const handleName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleAccSoftware = (e: React.FormEvent<HTMLInputElement>) => {
    setAccSoftware(e.currentTarget.value);
  };

  const handleAddress = (e: React.FormEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value);
  };

  const handleAbbr = (e: React.FormEvent<HTMLInputElement>) => {
    setAbbr(e.currentTarget.value);
  };

  const handleCop = (e: React.FormEvent<HTMLInputElement>) => {
    setCop(e.currentTarget.value);
  };

  const handleCountry = (e: React.FormEvent<HTMLInputElement>) => {
    setCountry(e.currentTarget.value);
  };

  const handleEntity = (e: React.FormEvent<HTMLInputElement>) => {
    setEntity(e.currentTarget.value);
  };

  const handleSales = (e: React.FormEvent<HTMLInputElement>) => {
    setSales(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addCompany({
      name,
      accSoftware,
      address,
      abbr,
      cop,
      country,
      entity,
      sales,
      //@ts-ignore
      userId: props.company.currentUser.id,
    });
  };
  return (
    <AddCompanyForm
      message={message}
      pending={pending}
      handleSubmit={handleSubmit}
      handleEntity={handleEntity}
      handleCountry={handleCountry}
      handleCop={handleCop}
      handleAbbr={handleAbbr}
      handleName={handleName}
      handleSales={handleSales}
      handleAddress={handleAddress}
      handleAccSoftware={handleAccSoftware}
    />
  );
};

const mapStateToProps = (state: State) => ({ company: state });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addCompany: (data: CompanyDetails) => dispatch(addCompany(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCompany);
