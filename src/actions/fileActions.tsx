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
  blob?: Blob;
};

export const fileUpload = (file: FileDetails): Action => ({
  type: FileAction.UPLOAD_SUCCESS,
  payload: {
    type: file.type,
    size: file.size,
    name: file.name,
    blob: file.blob,
  },
  message: "upload successful",
});
