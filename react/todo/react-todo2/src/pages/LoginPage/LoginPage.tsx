import React, { useState } from "react";
import styles from "./loginPage.module.scss";
import { login } from "../../apis/login";
import { useNavigate } from "react-router-dom";
import { sessionStorageAction } from "../../hooks/sessionStorageAction";

const LoginPage = ({
  setIsLogin,
}: {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // TODO: try등은 api에서 처리, at가 없다면 api에서 리턴
  const onLogin = async () => {
    const result = await login(email, password);
    if (!result) return;
    if (result.statusText === "OK") {
      const accessToken = result.data.data.accessToken;
      sessionStorageAction.storage("set", "accessToken", accessToken);
      setIsLogin(
        sessionStorageAction.storage("set", "accessToken", accessToken) !== null
      );
      navigate("/todo");
    } else {
      alert("실패");
    }
  };
  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onLogin();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TODO APP</h1>
      <h2 className={styles.title}>LOGIN</h2>
      <form id="loginForm" className={styles.form}>
        <label>
          <span>EMAIL</span>
          <input
            type="text"
            id="email"
            autoFocus
            required
            autoComplete="true"
            className={styles.input}
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>PASSWORD</span>
          <input
            className={styles.input}
            type="password"
            id="password"
            required
            autoComplete="true"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </label>
      </form>
      <div className={styles.btns}>
        <button
          type="button"
          className={styles.loginBtn}
          onClick={() => onLogin()}
        >
          LOGIN
        </button>
        <button
          type="button"
          className={styles.loginBtn}
          onClick={() => navigate("/signup")}
        >
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
