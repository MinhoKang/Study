import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../apis/auth/login";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login: authenticate } = useAuth();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.currentTarget.id;
    const value = e.currentTarget.value;
    setValues({ ...values, [id]: value });
  };

  const handleLogin = async () => {
    const result = await login({ id: values.email, password: values.password });
    if (result?.status === 200) {
      const accessToken = result.data.data.accessToken;
      sessionStorage.setItem("accessToken", accessToken);
      authenticate();
      navigate("/todo");
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "login") {
      handleLogin();
      console.log("login");
    } else if (id === "signUp") {
      navigate("/signUp");
    }
  };

  return { handleClick, onChange };
};
