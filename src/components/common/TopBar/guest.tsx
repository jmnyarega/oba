import React from "react";
import styled from "styled-components";

import theme from "../../../theme";

const Container = styled.div`
  margin: 0;
  height: 50px;
  box-shadow: 0 2px 2px 1px ${theme.colors.lightGray};
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize.h1};
`;

export const Guest = () => {
  return <Container> OBA </Container>;
};

export default Guest;
