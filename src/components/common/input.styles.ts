import styled from "styled-components";

import theme from "../../theme";

const Input = styled.input`
  border: 1px solid ${theme.colors.lightGray};
  height: 2rem;
  padding: 1.2rem;
  border-radius: 0.2rem;
  &:focus {
    border: 0.5px solid ${theme.colors.accentLight};
  }
  &:invalid {
    outline: 0.5px solid ${theme.colors.accentLight};
  }
  &::placeholder {
    color: ${theme.colors.gray};
  }
  &:hover:focus::placeholder {
    color: ${theme.colors.dark};
  }
`;

export default Input;
