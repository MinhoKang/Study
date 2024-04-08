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
    title: "EMAIL",
    error: "이메일을 입력하세요.",
  },
  {
    index: 1,
    type: "password",
    id: "password",
    required: true,
    autoComplete: "on",
    className: loginInputCss.input,
    placeholder: "PASSWORD",
    title: "PASSWORD",
    error: "비밀번호를 확인하세요",
  },
];
