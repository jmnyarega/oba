import styled from "styled-components";

import theme from "../../../theme";
import Button from "../../common/button.styles";

export const FileUploadContainer = styled.div`
  width: max(80vw, 300px);
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid ${theme.colors.lightGray};
  box-shadow: 0 0 3px 1px ${theme.colors.gray};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

export const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3;
  grid-row: 2;
  line-height: 1.1;
  font-size: 0.75rem;
  p {
    margin: 0.2rem;
  }
`;

export const Heading = styled.h2`
  font-size: ${theme.fontSize.h2};
  font-weight: ${theme.fontWeight.fontSemi};
  margin-bottom: 1rem;
  grid-row: 1;
  grid-column: 1 / -1;
`;

export const UploadSection = styled.form`
  display: grid;
  grid-template-column: 1fr 1fr;
  place-items: center;
  grid-gap: 30px;
  grid-column: 1 / 3;
`;

export const SubmitButton = styled(Button)`
  grid-column: 2;
  place-self: end;
`;

export const UploadButton = styled(Button)`
  background-color: ${theme.colors.gray};
  width: 100%;
  &:after {
    content: "\f093";
    padding: 0 0.5rem 0 1rem;
    font-family: "Font Awesome\ 5 Free";
  }
`;

export const CustomFileUpload = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-column: 2;

  label {
    grid-row: 1;
  }
  button {
    grid-row: 2;
  }

  span {
    grid-row: 3;
  }

  .btn {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    padding: 8px 20px;
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
  }

  input[type="file"] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
`;
