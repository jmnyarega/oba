import { SignUpDetails } from "../../actions/userActions";
import { State } from "../../reducers/signUpReducer";

export type SignUpTypes = {
  handleSumit(event: React.FormEvent<HTMLFormElement>): void;
  handleEmail(event: React.FormEvent<HTMLInputElement>): void;
  handleLastName(event: React.FormEvent<HTMLInputElement>): void;
  handlePhoneNumber(event: React.FormEvent<HTMLInputElement>): void;
  handlePassword(event: React.FormEvent<HTMLInputElement>): void;
  handleConfirmPassword(event: React.FormEvent<HTMLInputElement>): void;
  handleFirstName(event: React.FormEvent<HTMLInputElement>): void;
};

export type DispatchProps = {
  signUp: (data: SignUpDetails) => void;
};

export type StateProps = {
  user: State;
};
