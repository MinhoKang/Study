import { useState } from "react";
import { login } from "../apis/login";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const result = await login(id, password);
    if (!result) return;

    if (result.statusText === "OK") {
      const accessToken = result.data.data.accessToken;
      sessionStorage.setItem("accessToken", accessToken);

      navigate("/todo");
    } else {
      alert("실패");
    }
  };

  return { handleLogin, setId, setPassword, navigate };
};
