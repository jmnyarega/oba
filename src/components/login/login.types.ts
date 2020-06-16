import { LoginDetails } from "../../actions/userActions";
import { State } from "../../reducers/loginReducer";

export type SignUpTypes = {
  handleSumit(event: React.FormEvent<HTMLFormElement>): void;
  handleEmail(event: React.FormEvent<HTMLInputElement>): void;
  handlePassword(event: React.FormEvent<HTMLInputElement>): void;
  message: string;
  pending: boolean;
};

export type DispatchProps = {
  login: (data: LoginDetails) => void;
};

export type StateProps = {
  user: State;
};
