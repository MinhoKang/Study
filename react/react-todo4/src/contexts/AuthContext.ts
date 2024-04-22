import { createContext } from "react";

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isLogin: sessionStorage.getItem("accessToken") !== null,
});
