import { State } from "../../../reducers/fileReducer";
import { FileDetails } from "../../../actions/fileActions";

export type FileUploadTypes = {
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  onUploadFile(event: React.FormEvent<HTMLInputElement>): void;
  name: string;
  size: number;
  type: string;
};

export type DispatchProps = {
  upload: (data: FileDetails) => void;
};

export type StateProps = {
  file: State;
};
