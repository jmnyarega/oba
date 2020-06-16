import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./components/App";

import store from "./store";

console.log(process.env);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
