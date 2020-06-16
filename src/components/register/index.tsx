//@ts-nocheck
import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SignUpForm from "./registerForm";

import { SignUpDetails } from "../../actions/userActions";
import { State } from "../../reducers/signUpReducer";
import { userSignUp } from "../../actions/userActions";
import { DispatchProps, StateProps } from "./register.types";

type Props = RouteComponentProps & DispatchProps & StateProps;
const Register = ({ history, signUp, user }: Props) => {
  const { pending, message } = user.signup;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleFirstName = (e: React.FormEvent<HTMLInputElement>) => {
    setFirstName(e.currentTarget.value);
  };

  const handleLastName = (e: React.FormEvent<HTMLInputElement>) => {
    setLastName(e.currentTarget.value);
  };

  const handlePhoneNumber = (e: React.FormEvent<HTMLInputElement>) => {
    setPhoneNumber(e.currentTarget.value);
  };

  const handleConfirmPassword = (e: React.FormEvent<HTMLInputElement>) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const handleSumit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword,
    };
    signUp(data);
  };

  if (!pending && message === "success") {
    window.location.href = "/charts";
  }

  return (
    <SignUpForm
      message={message}
      pending={pending}
      handleSumit={handleSumit}
      handleEmail={handleEmail}
      handleLastName={handleLastName}
      handlePhoneNumber={handlePhoneNumber}
      handlePassword={handlePassword}
      handleConfirmPassword={handleConfirmPassword}
      handleFirstName={handleFirstName}
    />
  );
};

const mapStateToProps = (state: State) => {
  return { user: state };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUp: (data: SignUpDetails) => dispatch(userSignUp(data)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
