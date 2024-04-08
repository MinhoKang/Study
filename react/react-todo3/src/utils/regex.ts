import * as yup from "yup";


export const formSchema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력하세요")
    .email("이메일 형식이 아닙니다"),
  password: yup
    .string()
    .required("비밀번호는 영문, 숫자 포함 8자리를 입력하세요")
    .min(8, "최소 8자 이상 가능합니다")
    .max(15, "최대 15자 까지 가능합니다")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
      "영문 숫자포함 8자리를 입력해주세요."
    ),
    passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 다릅니다"),
    phoneNumber: yup
    .string()
    .matches(
      /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
      "전화번호를 다시 확인 후 입력 해주세요"
    ),
});

