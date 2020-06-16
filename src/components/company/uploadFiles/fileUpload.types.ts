import { State } from "../../../reducers/fileReducer";
import { FileDetails } from "../../../actions/fileActions";

export type FileUploadTypes = {
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  onUploadFile(event: React.FormEvent<HTMLInputElement>): void;
  name: string;
  size: number;
  type: string;
  company: any;
  message: string;
  pending: boolean;
  handleCompany(event: React.FormEvent<HTMLSelectElement>): void;
};

export type DispatchProps = {
  upload: (data: FileDetails) => void;
  getCompany: () => void;
};

export type StateProps = {
  file: State;
};
