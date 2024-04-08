import css from "../../styles/signUpPage/signUpPage.module.css";

export const signUpInput = [
  {
    index: 0,
    type: "text",
    id: "email",
    autoFocus: true,
    required: true,
    autoComplete: "on",
    className: css.input,
    placeholder: "EMAIL",
    title: "EMAIL",
  },
  {
    index: 1,
    type: "password",
    id: "password",
    required: true,
    autoComplete: "on",
    className: css.input,
    placeholder: "PASSWORD",
    title: "PASSWORD",
    register: {
      required: "비밀번호를 입력하세요",
      minLength: {
        value: 8,
        message: "최소 8자 이상의 비밀번호를 입력하세요",
      },
    },
  },
  {
    index: 2,
    type: "password",
    id: "passwordConfirm",
    required: true,
    autoComplete: "on",
    className: css.input,
    placeholder: "PASSWORD CONFIRM",
    title: "PASSWORD CONFIRM",
  },
  {
    index: 3,
    type: "tel",
    id: "phoneNumber",
    required: true,
    autoComplete: "on",
    className: css.input,
    placeholder: "PHONE NUMBER",
    title: "PHONE NUMBER",
  },
];
