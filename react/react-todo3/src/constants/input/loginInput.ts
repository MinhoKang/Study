import loginInputCss from "../../styles/loginPage/loginPage.module.css";

export const loginInputs = [
  {
    index: 0,
    type: "text",
    id: "email",
    autoFocus: true,
    required: true,
    autoComplete: "on",
    className: loginInputCss.input,
    placeholder: "EMAIL",
  },
  {
    index: 1,
    type: "password",
    id: "password",
    required: true,
    autoComplete: "on",
    className: loginInputCss.input,
    placeholder: "PASSWORD",
  },
];
