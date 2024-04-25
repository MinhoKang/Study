import { Route, Routes } from "react-router-dom";

import TodoPage from "../pages/todoPage/TodoPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import TodoDetail from "../features/todoPage/TodoDetail";

const ProtectedRouter = () => {
  return (
    <Routes>
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/todo/:id" element={<TodoDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default ProtectedRouter;
