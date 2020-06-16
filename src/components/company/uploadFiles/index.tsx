//@ts-nocheck
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import FileUploadForm from "./fileUploadForm";

import { State } from "../../../reducers/fileReducer";
import { fileUpload, FileDetails } from "../../../actions/fileActions";
import { getCompany } from "../../../actions/companyActions";

import { DispatchProps, StateProps } from "./fileUpload.types";

type Props = DispatchProps & StateProps;

const FileUpload = ({ upload, file, getCompany }: Props) => {
  // @ts-ignore
  const { message, pending } = file.file;
  //@ts-ignore
  const { company } = file;
  const emptyBlob = new Blob([], {});
  const [size, setSize] = useState(0);
  const [name, setName] = useState("");
  const [blob, setBlob] = useState(emptyBlob);
  const [type, setFileType] = useState("");
  const [id, setCompany] = useState("");
  useEffect(() => getCompany(), []);

  const onUploadFile = (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : emptyBlob;
    const fileName =
      e.currentTarget && e.currentTarget.files
        ? e.currentTarget.files[0].name
        : "";
    const fileSize = file ? file.size / 1000 : 0;
    const fileType = file ? file.type : "";
    setSize(fileSize);
    setName(fileName);
    setBlob(file);
    setFileType(fileType);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = new FormData();
    file.append("selectedFile", blob);
    file.append("id", id);
    // @ts-ignore
    upload(file);
  };
  const handleCompany = (e: React.FormEvent<HTMLSelectElement>) => {
    setCompany(e.currentTarget.value);
  };
  return (
    <FileUploadForm
      message={message}
      pending={pending}
      company={company}
      handleSubmit={handleSubmit}
      handleCompany={handleCompany}
      onUploadFile={onUploadFile}
      name={name}
      size={size}
      type={type}
    />
  );
};

const mapStateToProps = (state: State) => ({ file: state });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  upload: (data: FileDetails) => dispatch(fileUpload(data)),
  getCompany: () => dispatch(getCompany()),
});

//@ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
