import React from "react";

import styled from "styled-components";

import theme from "../theme";
import Button from "./common/button.styles";
import Input from "./common/input.styles";

const RegisterContainer = styled.div`
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

const RegistrationForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  label input {
    width: 100%;
  }

  button {
    grid-column-start: 2;
    grid-row: 4;
    place-self: flex-end;
  }
  label {
    color: ${theme.colors.accentLight};
  }
`;

const Terms = styled.div`
  display: flex;
  gap: 5px;
  input {
    align-self: flex-start;
  }
  label {
    color: ${theme.colors.dark};
  }
  a {
    color: ${theme.colors.accentLight};
  }
`;

const Register = () => (
  <RegisterContainer>
    <Heading>Sign Up</Heading>
    <RegistrationForm>
      <label htmlFor="f_name">
        First Name
        <Input type="text" name="f_name" id="f_name" placeholder="john" />
      </label>

      <label htmlFor="l_name">
        Last Name
        <Input type="text" name="l_name" id="l_name" placeholder="Doe" />
      </label>

      <label htmlFor="email">
        Email
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="johndoe@email.com"
        />
      </label>

      <label htmlFor="phone">
        Phone Number
        <Input type="phone" name="phone" id="phone" placeholder="+817000000" />
      </label>

      <label htmlFor="password">
        Password
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="********"
        />
      </label>

      <label htmlFor="confirm_password">
        Confirm Password
        <Input
          type="confirm_password"
          name="confirm_password"
          id="confirm_password"
          placeholder="********"
        />
      </label>
      <Terms>
        <input type="checkbox" id="check-terms" />
        <label htmlFor="check-terms">
          Agree to our
          <a href="/">terms</a>
          and
          <a href="/">conditions</a>
        </label>
      </Terms>
      <Button> Sign Up </Button>
    </RegistrationForm>
  </RegisterContainer>
);

export default Register;
