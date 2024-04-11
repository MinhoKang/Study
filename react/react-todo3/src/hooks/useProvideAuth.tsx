import { ReactNode,  useState } from "react";
import { AuthContext } from "../context/AuthContext";



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

export const ProvideAuth = ({ children }: { children: ReactNode }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};


