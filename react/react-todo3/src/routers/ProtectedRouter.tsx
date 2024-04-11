import { Route, Routes } from "react-router-dom";
import LoginRouter from "./LoginRouter";
import LogoutRouter from "./LogoutRouter";
import { useAuth } from "../hooks/useAuth";

const ProtectedRouter = () => {
  const { isLogin } = useAuth();
  return (
    <Routes>
      <Route path="/*" element={isLogin ? <LoginRouter /> : <LogoutRouter />} />
    </Routes>
  );
};

export default ProtectedRouter;
