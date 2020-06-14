import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styled from "styled-components";

import Login from "./login";
import Register from "./register";
import AddCompany from "./company/addCompany";
import FileUpload from "./company/fileUpload";

const Container = styled.div`
  margin: 0;
  font-family: "Roboto";
  padding: 0;
`;

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/addCompany">
            <AddCompany />
          </Route>
          <Route path="/upload">
            <FileUpload />
          </Route>
          <Route path="">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
