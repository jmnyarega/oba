import React from "react";

import {
  FileUploadContainer,
  Heading,
  UploadSection,
  UploadButton,
  FileInfo,
  CustomFileUpload,
} from "./fileUpload.styles";
import Button from "../../common/button.styles";

import { FileUploadTypes } from "./fileUpload.types";

const FileUploadForm = (props: FileUploadTypes) => {
  const { onUploadFile, name, size, type, handleSubmit } = props;
  return (
    <FileUploadContainer>
      <Heading> File Upload </Heading>
      <UploadSection onSubmit={handleSubmit}>
        <CustomFileUpload>
          <label htmlFor="file"> Select File </label>
          <input
            type="file"
            id="file"
            accept="text/csv"
            onChange={onUploadFile}
          />
          <UploadButton> Upload File </UploadButton>
        </CustomFileUpload>
        <Button> Submit </Button>
      </UploadSection>
      <FileInfo>
        {name ? <p>File Name: {name} </p> : ""}
        {size ? <p>File Size: {size} kb</p> : ""}
        {type ? <p>File Type: {type}</p> : ""}
      </FileInfo>
    </FileUploadContainer>
  );
};

export default FileUploadForm;
