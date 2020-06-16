import { Dispatch } from "redux";
import { http } from "../helpers/auth";
import baseUrl from "../helpers/baseUrl";

export enum FileAction {
  UPLOAD_SUCCESS = "UPLOAD_SUCCESS",
  UPLOAD_PENDING = "UPLOAD_PENDING",
  UPLOAD_FAIL = "UPLOAD_FAIL",
  GET_TRANSACTION_SUCCESS = "GET_TRANSACTION_SUCCESS",
  GET_TRANSACTION_PENDING = "GET_TRANSACTION_PENDING",
  GET_TRANSACTION_FAIL = "GET_TRANSACTION_FAIL",
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

export const fileUploadActionSuccess = (message: string) => ({
  type: FileAction.UPLOAD_SUCCESS,
  message,
});

export const fileUploadActionPending = () => ({
  type: FileAction.UPLOAD_PENDING,
});

export const fileUploadActionError = (message: string) => ({
  type: FileAction.UPLOAD_FAIL,
  message,
});

export const getTransactionSuccess = (payload: any) => ({
  type: FileAction.GET_TRANSACTION_SUCCESS,
  payload,
});

export const getTransactionPending = () => ({
  type: FileAction.GET_TRANSACTION_PENDING,
});

export const getTransactionError = (message: string) => ({
  type: FileAction.GET_TRANSACTION_FAIL,
  message,
});

export const fileUpload = (file: FileDetails): any => {
  return (dispatch: Dispatch) => {
    dispatch(fileUploadActionPending());
    return http()
      .post(`${baseUrl}/transaction`, file)
      .then((res) => {
        dispatch(fileUploadActionSuccess(res.data));
      })
      .catch((err) => fileUploadActionError("fail"));
  };
};

export const getTransactions = (): any => {
  return (dispatch: Dispatch) => {
    dispatch(getTransactionPending());
    return http()
      .get(`${baseUrl}/transaction`)
      .then((res) => {
        dispatch(getTransactionSuccess(res.data));
      })
      .catch((err) => getTransactionError("fail"));
  };
};
