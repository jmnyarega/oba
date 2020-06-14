import React, { useState } from "react";

import styled from "styled-components";

import theme from "../../theme";
import Button from "../common/button.styles";

const FileUploadContainer = styled.div`
  width: max(80vw, 300px);
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid ${theme.colors.lightGray};
  box-shadow: 0 0 3px 1px ${theme.colors.gray};
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`;

const FileInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2;
  grid-row: 2;
`;

const Heading = styled.h2`
  font-size: ${theme.fontSize.h2};
  font-weight: ${theme.fontWeight.fontSemi};
  margin-bottom: 1rem;
  grid-row: 1;
  grid-column: 1 / -1;
`;

const UploadSection = styled.form`
  display: grid;
  place-items: center;
  grid-gap: 30px;
`;

const UploadButton = styled(Button)`
  background-color: ${theme.colors.gray};
  width: 100%;
  &:after {
    content: "\f093";
    padding: 0 0.5rem 0 1rem;
    font-family: "Font Awesome\ 5 Free";
  }
`;

const CustomFileUpload = styled.div`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: inline-block;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;

  p {
    margin-bottom: 0;
  }

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

const FileUpload = () => {
  const emptyBlob = new Blob([], {});
  const [size, setSize] = useState(0);
  const [name, setName] = useState("");
  const [blob, setBlob] = useState(emptyBlob);

  const uploadFiles = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : emptyBlob;
    const fileName = e.currentTarget ? e.currentTarget.value : "";
    const fileSize = file ? file.size / 1000 : 0;
    setSize(fileSize);
    setName(fileName);
    setBlob(file);
  };
  return (
    <FileUploadContainer>
      <Heading> File Upload </Heading>
      <UploadSection>
        <CustomFileUpload>
          <label htmlFor="file"> Select File </label>
          <input
            type="file"
            id="file"
            accept="text/csv"
            onChange={uploadFiles}
          />
          <UploadButton> Upload File </UploadButton>
        </CustomFileUpload>
        <Button> Submit </Button>
      </UploadSection>
      <FileInfo>
        {name ? <p>File Name: {name} </p> : ""}
        {size ? <p>File Size: {size} kb</p> : ""}
      </FileInfo>
    </FileUploadContainer>
  );
};

export default FileUpload;
