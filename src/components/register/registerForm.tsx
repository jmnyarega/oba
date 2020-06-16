import React from "react";

import {
  RegisterContainer,
  Heading,
  Terms,
  RegistrationForm,
} from "./register.styles";
import Button from "../common/button.styles";
import Input from "../common/input.styles";

import { SignUpTypes } from "./register.types";

const SignUpForm = (props: SignUpTypes) => {
  const {
    handleSumit,
    handleFirstName,
    handleLastName,
    handleEmail,
    handlePhoneNumber,
    handlePassword,
    handleConfirmPassword,
    message,
    pending,
  } = props;
  return (
    <RegisterContainer>
      <Heading>Sign Up</Heading>
      <RegistrationForm onSubmit={handleSumit}>
        <label htmlFor="fName">
          First Name
          <Input
            onChange={handleFirstName}
            type="text"
            id="fName"
            placeholder="john"
          />
        </label>

        <label htmlFor="lName">
          Last Name
          <Input
            onChange={handleLastName}
            type="text"
            id="lName"
            placeholder="Doe"
          />
        </label>

        <label htmlFor="email">
          Email
          <Input
            onChange={handleEmail}
            type="email"
            id="email"
            placeholder="johndoe@email.com"
          />
        </label>

        <label htmlFor="phone">
          Phone Number
          <Input
            onChange={handlePhoneNumber}
            type="phone"
            id="phone"
            placeholder="+817000000"
          />
        </label>

        <label htmlFor="password">
          Password
          <Input
            onChange={handlePassword}
            type="password"
            id="password"
            placeholder="********"
          />
        </label>

        <label htmlFor="confirmPassword">
          Confirm Password
          <Input
            onChange={handleConfirmPassword}
            type="password"
            id="confirmPassword"
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
      <label>
        {!pending && message === "failed" && "Something went wrong, try again"}
        {!pending && message === "success" && "Registration successful"}
        {pending && "Processing..."}
      </label>
      <p>
        <a href="/login">Login </a>
      </p>
    </RegisterContainer>
  );
};

export default SignUpForm;
