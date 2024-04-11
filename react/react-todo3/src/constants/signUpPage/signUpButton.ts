import css from "../../styles/signUpPage/signUpPage.module.css";
import { ButtonProps } from "../../types/button";

export const signUpButtons: ButtonProps[] = [
  {
    index: 0,
    type: "submit",
    form: "signUpForm",
    text: "SIGN UP",
    id: "signUp",
    className: css.btn,
  },
  {
    index: 1,
    type: "button",
    text: "CANCEL",
    id: "cancel",
    className: [css.btn, css.cancel],
  },
];
