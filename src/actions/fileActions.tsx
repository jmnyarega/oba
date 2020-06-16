import { Dispatch } from "redux";
import { http } from "../helpers/auth";

export enum FileAction {
  UPLOAD_SUCCESS = "UPLOAD_SUCCESS",
  UPLOAD_PENDING = "UPLOAD_PENDING",
  UPLOAD_FAIL = "UPLOAD_FAIL",
}
export type Action = {
  type: FileAction;
  payload: any;
  message?: string;
};

export type FileDetails = {
  name: string;
  size: number;
  type: string;
  file?: Blob;
};

export const fileUploadActionSuccess = (payload: Action) => ({
  type: FileAction.UPLOAD_SUCCESS,
  payload,
});

export const fileUploadActionPending = () => ({
  type: FileAction.UPLOAD_PENDING,
});

export const fileUpload = (file: FileDetails): any => {
  return (dispatch: Dispatch) => {
    dispatch(fileUploadActionPending());
    console.log(file);
    return http()
      .post("http://127.0.0.1:8443/file", file)
      .then((res) => {
        console.log(res);
        dispatch(fileUploadActionSuccess(res.data));
      })
      .catch((x) => console.log(x));
  };
};
