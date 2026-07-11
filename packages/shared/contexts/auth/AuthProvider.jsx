import { useState } from "react";

import { setStoreToken, clearStoreToken } from "../../api/store";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const storeTokenFromContext = (token) => {
    setStoreToken(token);
    setIsLoggedIn(!!token);
  };

  const removeTokenFromContext = () => {
    clearStoreToken();
    setIsLoggedIn(false);
  };

  return (
    <AuthContext
      value={{ isLoggedIn, storeTokenFromContext, removeTokenFromContext }}
    >
      {children}
    </AuthContext>
  );
}
