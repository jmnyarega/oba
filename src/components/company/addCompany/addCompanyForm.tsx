import React from "react";

import {
  RegisterCompanyContainer,
  Heading,
  CompanyRegistrationForm,
} from "./addCompany.styles";

import Input from "../../common/input.styles";
import Button from "../../common/button.styles";

import { CompanyTypes } from "./addCompany.types";

const AddCompanyForm = (props: CompanyTypes) => {
  const {
    handleSales,
    handleName,
    handleAbbr,
    handleCop,
    handleEntity,
    handleSubmit,
    handleAddress,
    handleCountry,
    handleAccSoftware,
  } = props;
  return (
    <RegisterCompanyContainer>
      <Heading>Register Company</Heading>
      <CompanyRegistrationForm onSubmit={handleSubmit}>
        <label htmlFor="business_name">
          Business Name
          <Input
            onChange={handleName}
            type="text"
            name="business_name"
            id="business_name"
            placeholder="Powered by People"
          />
        </label>

        <label htmlFor="acc_software">
          Accounting Software
          <Input
            onChange={handleAccSoftware}
            type="text"
            name="acc_software"
            id="acc_software"
            placeholder="Quickbooks"
          />
        </label>

        <label htmlFor="company_address">
          Company Address
          <Input
            onChange={handleAddress}
            type="email"
            name="company_address"
            id="company_address"
            placeholder="123 main street New York"
          />
        </label>

        <label htmlFor="business_abbr">
          Business Abbreviations
          <Input
            onChange={handleAbbr}
            type="text"
            name="business_abbr"
            id="business_abbr"
            placeholder="PBP"
          />
        </label>

        <label htmlFor="countries_of_operations">
          Countries Of Operations
          <Input
            onChange={handleCop}
            type="text"
            name="countries_of_operations"
            id="countries_of_operations"
            placeholder="kenya, Nigeria, South Africa"
          />
        </label>

        <label htmlFor="country">
          Country
          <Input
            onChange={handleCountry}
            type="text"
            name="country"
            id="country"
            placeholder="USA"
          />
        </label>

        <label htmlFor="annual_sales_revenue">
          Annual Sales Revenue
          <Input
            onChange={handleSales}
            type="text"
            name="annual_sales_revenue"
            id="annual_sales_revenue"
            placeholder="$250, 000 - $500, 000"
          />
        </label>

        <label htmlFor="entity">
          Entity
          <Input
            onChange={handleEntity}
            type="text"
            name="entity"
            id="entity"
            placeholder="Retailer"
          />
        </label>
        <Button>Add Company</Button>
      </CompanyRegistrationForm>
    </RegisterCompanyContainer>
  );
};

export default AddCompanyForm;
