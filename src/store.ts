import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import loginReducer from "./reducers/loginReducer";
import signUpReducer from "./reducers/signUpReducer";
import fileReducer from "./reducers/fileReducer";
import companyReducer from "./reducers/companyReducer";
import currentUserReducer from "./reducers/currentUserReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  file: fileReducer,
  company: companyReducer,
  currentUser: currentUserReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
