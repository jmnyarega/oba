import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import styled from "styled-components";

import theme from "../theme";
import Button from "./common/button.styles";
import Input from "./common/input.styles";

import { userLogin } from "../actions/userActions";
import { LoginDetails } from "../actions/userActions";
import { State } from "../reducers/userReducer";

const LoginContainer = styled.div`
  width: max(30vw, 300px);
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

const LoginForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 1rem;

  #login-email {
    grid-column: 1 / 3;
    grid-row: 1;
  }

  #login-password {
    grid-column: 1 / 3;
    grid-row: 2;
  }

  input {
    display: block;
    width: 100%;
  }

  button {
    grid-column-start: 2;
    grid-row: 3;
    place-self: flex-end;
  }

  label {
    color: ${theme.colors.accentLight};
  }
`;

type DispatchProps = {
  login: (data: LoginDetails) => void;
};

type StateProps = {
  user: State;
};

type Props = RouteComponentProps & DispatchProps & StateProps;

const Login = ({ history, login, user }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userLogin({ email, password });
    if (user.login.message) {
      history.push("/upload");
    }
  };

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
    </LoginContainer>
  );
};

const mapStateToProps = (state: State) => {
  return { user: state };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (data: LoginDetails) => dispatch(userLogin(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
