import loginInputCss from "../../styles/loginPage/loginPage.module.css";
import { ButtonProps } from "../../types/button";

export const loginButtons: ButtonProps[] = [
  {
    index: 0,
    type: "button",
    text: "LOGIN",
    className: loginInputCss.loginBtn,
    id: "login",
  },
  {
    index: 1,
    type: "button",
    text: "SIGN UP",
    className: loginInputCss.loginBtn,
    id: "signUp",
  },
];
