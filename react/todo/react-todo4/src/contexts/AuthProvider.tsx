import { AuthContext } from "./AuthContext";
import { ReactNode, useState } from "react";

const useProvideAuth = () => {
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("accessToken") !== null
  );

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    sessionStorage.clear();
    setIsLogin(false);
  };

  return {
    login,
    logout,
    isLogin,
  };
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
