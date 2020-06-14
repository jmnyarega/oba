import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import loginReducer from "./reducers/loginReducer";
import signUpReducer from "./reducers/signUpReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signUpReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
