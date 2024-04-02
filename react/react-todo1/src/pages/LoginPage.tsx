import React, { useState } from "react";
import Auth from "../../utils/auth";

const LoginPage: React.FC<{
  setIsLogin: (value: boolean) => void;
  setCurrentPath: (path: string) => void;
}> = ({ setIsLogin, setCurrentPath }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const auth = new Auth();

  const login = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    auth
      .login(id, password)
      .then(() => {
        setIsLogin(true);
        setCurrentPath("todo");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setAccount = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.id === "idInput") {
      setId(target.value);
    } else if (target.id === "passwordInput") {
      setPassword(target.value);
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <div>
        <form>
          <label>
            ID
            <input
              type="text"
              id="idInput"
              required
              autoComplete="true"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setAccount(e);
              }}
            ></input>
          </label>
          <label>
            PASSWORD
            <input
              type="password"
              id="passwordInput"
              required
              autoComplete="true"
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setAccount(e);
              }}
            ></input>
          </label>
          <button id="loginBtn" type="submit" onClick={(e) => login(e)}>
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
