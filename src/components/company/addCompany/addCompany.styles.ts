import styled from "styled-components";
import theme from "../../../theme";

export const RegisterCompanyContainer = styled.div`
  width: max(50vw, 300px);
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

export const CompanyRegistrationForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  label input {
    width: 100%;
  }

  button {
    grid-column-start: 2;
    grid-row: 5;
    place-self: flex-end;
  }
  label {
    color: ${theme.colors.accentLight};
  }
`;
