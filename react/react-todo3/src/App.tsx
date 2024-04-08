import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import TodoPage from "./pages/todoPage/TodoPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

function App() {
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("accessToken") !== null
  );
  // TODO: 선언형으로 리팩토링
  return (
    <div>
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
