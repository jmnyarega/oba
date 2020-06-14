import styled from "styled-components";

import theme from "../../theme";

const Button = styled.button`
  background-color: ${theme.colors.accent};
  color: ${theme.colors.light};
  border: none;
  font-weight: ${theme.fontWeight.fontBold};
  text-transform: uppercase;
  border-radius: 0.3rem;
  padding: 0.7rem 2rem;
  cursor: pointer;
`;

export default Button;
