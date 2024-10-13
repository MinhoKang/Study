import React from "react";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "signUp") {
      console.log("회원가입");
    } else if (id === "cancel") {
      navigate("/");
    }
  };

  return { handleClick };
};
