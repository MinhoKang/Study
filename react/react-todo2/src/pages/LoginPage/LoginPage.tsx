import { useState } from "react";
import styles from "./loginPage.module.scss";
import { login } from "../../apis/login";
import { useNavigate } from "react-router-dom";
import { sessionStorageAction } from "../../hooks/sessionStorageAction";
import { useDispatch } from "react-redux";
import { changeLoginState } from "../../store/loginSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = await login(email, password);
    console.log(result);
    if (result?.statusText === "OK") {
      const accessToken = result.data.data.accessToken;
      sessionStorageAction.storage("set", "accessToken", accessToken);
      dispatch(changeLoginState(true));
      navigate("/todo");
    } else {
      alert("실패");
    }
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onLogin(e);
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
            onKeyDown={handleKeyPress}
          />
        </label>
      </form>
      <div className={styles.btns}>
        <button
          type="button"
          className={styles.loginBtn}
          onClick={(e) => onLogin(e)}
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
