import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SignInForm from "./loginForm";

import { userLogin } from "../../actions/userActions";
import { LoginDetails } from "../../actions/userActions";
import { State } from "../../reducers/loginReducer";

import { DispatchProps, StateProps } from "./login.types";

type Props = RouteComponentProps & DispatchProps & StateProps;

const Login = ({ history, login, user }: Props) => {
  //@ts-ignore
  const { pending, message } = user.login;
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
    const data = { email, password };
    login(data);
  };

  if (!pending && message === "login success") {
    window.location.href = "/charts";
  }

  return (
    <SignInForm
      handleSumit={handleSumit}
      message={message}
      pending={pending}
      handlePassword={handlePassword}
      handleEmail={handleEmail}
    />
  );
};

const mapStateToProps = (state: State) => {
  return { user: state };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (data: LoginDetails) => dispatch(userLogin(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
