import React from "react";

import { LoginForm, Heading, LoginContainer } from "./login.styles";
import Button from "../common/button.styles";
import Input from "../common/input.styles";

import { SignUpTypes } from "./login.types";

const SignInForm = (props: SignUpTypes) => {
  const { handleSumit, handleEmail, handlePassword, message, pending } = props;
  return (
    <LoginContainer>
      <Heading> Sign In </Heading>
      <LoginForm onSubmit={handleSumit}>
        <div id="login-email">
          <label htmlFor="email">
            Email
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleEmail}
              placeholder="johndoe@email.com"
            />
          </label>
        </div>

        <div id="login-password">
          <label htmlFor="password">
            Password
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handlePassword}
              placeholder="password"
            />
          </label>
        </div>
        <Button> Sign In </Button>
      </LoginForm>
      <label> {pending ? "Loading..." : message} </label>
      <p>
        <a href="/signup">Create account </a>
      </p>
    </LoginContainer>
  );
};

export default SignInForm;
