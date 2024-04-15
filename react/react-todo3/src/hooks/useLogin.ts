import { useState } from "react";
import { login } from "../apis/login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";
import { emailRegEx, passwordRegEx } from "../utils";

export const useLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [notValid, setNotValid] = useState<string[]>([]);
  const { login: authenticate } = useAuth();
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id as keyof typeof values;
    const value = e.target.value;
    setValues({ ...values, [id]: value });
    validation(id, value);
  };

  const validationRules = {
    email: (value: string) => emailRegEx.test(value),
    password: (value: string) => passwordRegEx.test(value),
  };

  const validation = (target: keyof typeof values, value: string) => {
    const isValid = validationRules[target](value);
    if (!isValid) {
      if (!notValid.includes(target)) {
        setNotValid([...notValid, target]);
      }
    } else {
      setNotValid(notValid.filter((item) => item !== target));
    }
  };

  const handleLogin = async () => {
    const result = await login(values.email, values.password);
    if (!result) return;

    if (result.statusText === "OK") {
      const accessToken = result.data.data.accessToken;
      sessionStorage.setItem("accessToken", accessToken);
      authenticate();
      navigate("/todo");
    } else {
      alert("실패");
    }
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "login") {
      handleLogin();
    } else if (id === "signUp") {
      navigate("/signup");
    }
  };

  return { onChange, handleLogin, navigate, onClick, notValid };
};
