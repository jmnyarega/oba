import React from "react";

import styled from "styled-components";

import theme from "../../theme";
import Button from "../common/button.styles";
import Input from "../common/input.styles";

const RegisterCompanyContainer = styled.div`
  width: max(50vw, 300px);
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 0.5rem;
  box-shadow: 0 0 3px 1px ${theme.colors.gray};
`;

const Heading = styled.h2`
  font-size: ${theme.fontSize.h2};
  font-weight: ${theme.fontWeight.fontSemi};
  margin-bottom: 1rem;
`;

const CompanyRegistrationForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  label input {
    width: 100%;
  }

  button {
    grid-column-start: 2;
    grid-row: 5;
    place-self: flex-end;
  }
  label {
    color: ${theme.colors.accentLight};
  }
`;

const AddCompany = () => (
  <RegisterCompanyContainer>
    <Heading>Register Company</Heading>
    <CompanyRegistrationForm>
      <label htmlFor="business_name">
        Business Name
        <Input
          type="text"
          name="business_name"
          id="business_name"
          placeholder="Powered by People"
        />
      </label>

      <label htmlFor="acc_software">
        Accounting Software
        <Input
          type="text"
          name="acc_software"
          id="acc_software"
          placeholder="Quickbooks"
        />
      </label>

      <label htmlFor="company_address">
        Company Address
        <Input
          type="email"
          name="company_address"
          id="company_address"
          placeholder="123 main street New York"
        />
      </label>

      <label htmlFor="business_abbr">
        Business Abbreviations
        <Input
          type="text"
          name="business_abbr"
          id="business_abbr"
          placeholder="PBP"
        />
      </label>

      <label htmlFor="countries_of_operations">
        Countries Of Operations
        <Input
          type="text"
          name="countries_of_operations"
          id="countries_of_operations"
          placeholder="kenya, Nigeria, South Africa"
        />
      </label>

      <label htmlFor="country">
        Country
        <Input type="text" name="country" id="country" placeholder="USA" />
      </label>

      <label htmlFor="annual_sales_revenue">
        Countries Of Operations
        <Input
          type="text"
          name="annual_sales_revenue"
          id="annual_sales_revenue"
          placeholder="$250, 000 - $500, 000"
        />
      </label>

      <label htmlFor="entity">
        Entity
        <Input type="text" name="entity" id="entity" placeholder="Retailer" />
      </label>
      <Button>Add Company</Button>
    </CompanyRegistrationForm>
  </RegisterCompanyContainer>
);

export default AddCompany;
