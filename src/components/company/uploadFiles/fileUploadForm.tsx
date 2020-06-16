import React from "react";

import {
  FileUploadContainer,
  Heading,
  UploadSection,
  UploadButton,
  FileInfo,
  CustomFileUpload,
  SubmitButton,
} from "./fileUpload.styles";

import { FileUploadTypes } from "./fileUpload.types";

const FileUploadForm = (props: FileUploadTypes) => {
  const {
    onUploadFile,
    name,
    size,
    type,
    handleSubmit,
    company,
    handleCompany,
    message,
    pending,
  } = props;
  return (
    <FileUploadContainer>
      <Heading> File Upload </Heading>
      <UploadSection onSubmit={handleSubmit}>
        <select required onChange={handleCompany}>
          <option> select company </option>
          {company.payload &&
            company.payload.map((x: any) => {
              //@ts-ignore
              const { name, id } = x;
              return <option value={id}>{name}</option>;
            })}
        </select>
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
        <SubmitButton> Submit </SubmitButton>
      </UploadSection>
      <FileInfo>
        {name ? <p>File Name: {name} </p> : ""}
        {size ? <p>File Size: {size} kb</p> : ""}
        {type ? <p>File Type: {type}</p> : ""}
      </FileInfo>
      <label>
        {pending && "processing"}
        {!pending && message === "failed" && "Something went wrong, try again"}
        {!pending && message === "success" && "Upload succesfull"}
      </label>
    </FileUploadContainer>
  );
};

export default FileUploadForm;
