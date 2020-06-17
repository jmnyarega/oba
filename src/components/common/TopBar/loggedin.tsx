import React from "react";
import styled from "styled-components";

import theme from "../../../theme";

const Container = styled.div`
  margin: 0;
  height: 50px;
  box-shadow: 0 2px 2px 1px ${theme.colors.lightGray};
  display: grid;
  grid-template-columns: 1fr minmax(300px, 500px) minmax(300px, 600px) 1fr;
  font-size: ${theme.fontSize.h1};
  place-content: center;
`;

const Logo = styled.div`
  grid-column: 2;
  place-self: center;
`;
const Links = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${theme.colors.gray};
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
  }
  a:hover {
    background-color: ${theme.colors.lightGray};
  }
`;

const LoggedIn = () => {
  return (
    <Container>
      <Logo> OBA </Logo>
      <Links>
        <a href="/charts"> Charts </a>
        <a href="/addCompany"> Add Company </a>
        <a href="/upload"> Upload </a>
        <a href="/logout"> logout </a>
      </Links>
    </Container>
  );
};

export default LoggedIn;
