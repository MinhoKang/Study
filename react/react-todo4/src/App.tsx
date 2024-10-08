import { Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import { useAuth } from "./hooks/useAuth";
import css from "./styles/app.module.css";
import ProtectedRouter from "./routers/ProtectedRouter";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const App = () => {
  const { isLogin } = useAuth();
  
  return (
    <Container className={css.container}>
      <Routes>
        {isLogin ? (
          <Route path="/*" element={<ProtectedRouter />} />
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/todo" element={<SignUpPage />} />
            <Route path="*" element={<ErrorPage />} />
          </>
        )}
      </Routes>
    </Container>
  );
};

export default App;
