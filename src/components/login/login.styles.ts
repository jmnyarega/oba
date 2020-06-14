import styled from "styled-components";
import theme from "../../theme";

export const LoginContainer = styled.div`
  width: max(30vw, 300px);
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 0.5rem;
  box-shadow: 0 0 3px 1px ${theme.colors.gray};
`;

export const Heading = styled.h2`
  font-size: ${theme.fontSize.h2};
  font-weight: ${theme.fontWeight.fontSemi};
  margin-bottom: 1rem;
`;

export const LoginForm = styled.form`
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
