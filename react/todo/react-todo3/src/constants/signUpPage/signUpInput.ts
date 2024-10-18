import css from "../../styles/signUpPage/signUpPage.module.css";
import { InputType } from "../../types";

export const signUpInput: InputType[] = [
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
    error: "이메일 형식으로 입력하세요",
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
    error: "8자 이상 입력하세요",
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
    error: "비밀번호가 일치하지 않습니다",
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
    error: "01000000000의 형식으로 입력하세요",
  },
];