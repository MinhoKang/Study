import { useState } from "react";

export const useLoginValidation = (initialValue, validationRegex) => {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setIsValid(validationRegex.test(inputValue));
  };

  return {
    value,
    isValid,
    handleChange,
  };
};

export const useLoginValidation1 = (e, values, setValues, validationRegex) => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const id = e.target.id;
  const value = e.target.value;

  setValues({ ...values, [id]: value });

  if (id === "email") {
    setIsEmailValid(validationRegex.test(value));
    return isEmailValid;
  } else if (id === "password") {
    setIsPasswordValid(validationRegex.test(value));
    return isPasswordValid;
  }
};
