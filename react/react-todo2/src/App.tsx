import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import styles from "./app.module.scss";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useSelector } from "react-redux";

function App() {
  const loginState = useSelector((state) => state.login);
  console.log(loginState);

  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={
            loginState ? <Navigate to="/todo" /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={loginState ? <Navigate to="/todo" /> : <LoginPage />}
        />
        <Route
          path="/signup"
          element={loginState ? <Navigate to="/todo" /> : <SignUpPage />}
        />
        <Route
          path="/todo"
          element={loginState ? <TodoPage /> : <Navigate to="/login" />}
        />
        <Route path="\*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
