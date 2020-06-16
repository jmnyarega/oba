import React from "react";

import { removeLocalStorageToken } from "../../helpers/auth";

const Logout = () => {
  removeLocalStorageToken();
  window.location.href = "/login";
  return null;
};

export default Logout;
