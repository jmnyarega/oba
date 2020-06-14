import React, { useState } from "react";

import FileUploadForm from "./fileUploadForm";

const FileUpload = () => {
  const emptyBlob = new Blob([], {});
  const [size, setSize] = useState(0);
  const [name, setName] = useState("");
  const [blob, setBlob] = useState(emptyBlob);
  const [type, setFileType] = useState("");

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
  return (
    <FileUploadForm
      onUploadFile={onUploadFile}
      name={name}
      size={size}
      type={type}
    />
  );
};

export default FileUpload;
