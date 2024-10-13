import { Route, Routes } from "react-router-dom";
import TodoPage from "../pages/todoPage/TodoPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

const LoginRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<TodoPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default LoginRouter;
