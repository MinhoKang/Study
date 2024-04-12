import { useState } from "react";
import { singUp } from "../apis/signUp";
import { emailRegEx } from "../utils";
import { phoneNumberRegEx } from "../utils/regex";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
  });
  const [notValid, setNotValid] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.id as keyof typeof signUpData;
    setSignUpData({ ...signUpData, [target]: e.target.value });
    validation(target, e.target.value);
  };

  const validationRules = {
    email: (value: string) => emailRegEx.test(value),
    password: (value: string) => value.length >= 8,
    passwordConfirm: (value: string) => value === signUpData.password,
    phoneNumber: (value: string) => phoneNumberRegEx.test(value),
  };

  const validation = (target: keyof typeof signUpData, value: string) => {
    const isValid = validationRules[target](value);
    if (!isValid) {
      if (!notValid.includes(target)) {
        setNotValid([...notValid, target]);
      }
    } else {
      setNotValid(notValid.filter((item) => item !== target));
    }
  };

  const handleSignUp = async () => {
    const { email, password, passwordConfirm, phoneNumber } = signUpData;
    const result = await singUp(email, password, passwordConfirm, phoneNumber);
    if (!result) return;
    if (result.status === 201) {
      alert(result.data.message);
      navigate("/");
    } else {
      alert(result.data.message);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    if (id === "cancel") {
      navigate("/");
    } else if (id === "signUp") {
      handleSignUp();
    }
  };

  return { notValid, handleChange, handleClick };
};
