import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import styles from "./app.module.scss";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("accessToken") !== null
  );
  // TODO: 선언형으로 리팩토링
  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Navigate to="/todo" /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            isLogin ? (
              <Navigate to="/todo" />
            ) : (
              <LoginPage setIsLogin={setIsLogin} />
            )
          }
        />
        <Route
          path="/signup"
          element={isLogin ? <Navigate to="/todo" /> : <SignUpPage />}
        />
        <Route
          path="/todo"
          element={
            isLogin ? (
              <TodoPage isLogin={isLogin} setIsLogin={setIsLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
