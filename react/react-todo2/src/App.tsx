import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import styles from "./app.module.scss";
import { useState } from "react";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Navigate to="/todo" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/todo" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={isLogin ? <Navigate to="/todo" /> : <SignUpPage />}
        />
        <Route
          path="/todo"
          element={isLogin ? <TodoPage /> : <Navigate to="/login" />}
        />
        <Route path="\*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
