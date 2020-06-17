import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import styled from "styled-components";

import { getUserData } from "../actions/userActions";
import { State } from "../reducers/currentUserReducer";

import Login from "./login/index";
import Register from "./register/index";
import AddCompany from "./company/addCompany/index";
import FileUpload from "./company/uploadFiles/index";
import Charts from "./company/charts/index";
import Logout from "./logout/logout";

import Guest from "./common/TopBar/guest";
import LoggedIn from "./common/TopBar/loggedin";

const Container = styled.div`
  margin: 0;
  font-family: "Roboto";
  padding: 0;
`;
export type DispatchProps = {
  loggedInUser: () => void;
};

export type StateProps = {
  currentUser: State;
};

type Props = DispatchProps & StateProps;

function publicRoutes() {
  return (
    <div>
      <Guest />
      <Switch>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

function privateRoutes() {
  return (
    <div>
      <LoggedIn />
      <Switch>
        <Route exact path="/addCompany">
          <AddCompany />
        </Route>
        <Route exact path="/upload">
          <FileUpload />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/charts">
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

function App(props: Props) {
  const { currentUser, loggedInUser } = props;
  // eslint-disable-next-line
  useEffect(() => loggedInUser(), []);
  return (
    <Container>
      {/* @ts-ignore */}
      <Router>{!currentUser.email ? publicRoutes() : privateRoutes()}</Router>
    </Container>
  );
}

const mapStateToProps = (state: State) => {
  return { currentUser: state && state.currentUser };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loggedInUser: () => dispatch(getUserData()),
  };
};

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(App);
