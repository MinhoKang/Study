import { createContext } from "react";

export const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  isLogin: false,
});
