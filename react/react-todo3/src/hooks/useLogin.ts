import { useState } from "react";
import { login } from "../apis/login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login: authenticate } = useAuth();

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

  return { values, setValues, handleLogin, navigate };
};
