import styles from "./signUpPage.module.scss";
import cn from "classnames";
import { singUp } from "../../apis/signUp";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignUpData = {
  confrimPassword: string;
  email: string;
  password: string;
  phoneNumber: string;
};

const SignUpPage = () => {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [checkPassword, setCheckPassword] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const phoneRegExp =

  const formSchema = yup.object({
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
    confrimPassword: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 다릅니다"),
    phoneNumber: yup
      .string()
      .matches(
        /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
        "전화번호를 다시 확인 후 입력 해주세요"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: SignUpData) => {
    const { confrimPassword, email, password, phoneNumber } = data;
    const result = await singUp(email, password, confrimPassword, phoneNumber);
    console.log(result);
    if (!result) return;
    if (result.status === 201) {
      alert(result.data.message);
      navigate("/login");
    } else {
      alert(result.data.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SIGN UP</h1>
      <form
        id="signUpForm"
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <span>EMAIL</span>
          <input
            type="text"
            id="email"
            className={styles.input}
            placeholder="EMAIL"
            autoComplete="true"
            {...register("email")}
          />
          {errors.email && (
            <p className={styles.warningText}>{errors.email.message}</p>
          )}
        </label>
        <label>
          <span>PASSWORD</span>
          <input
            type="password"
            id="password"
            className={styles.input}
            autoComplete="true"
            placeholder="PASSWORD"
            {...register("password", {
              required: "비밀번호를 입력하세요",
              minLength: {
                value: 8,
                message: "최소 8자 이상의 비밀번호를 입력하세요",
              },
            })}
          />
          {errors.password && (
            <p className={styles.warningText}>{errors.password.message}</p>
          )}
        </label>
        <label>
          <span>CONFIRM PASSWORD</span>
          <input
            type="password"
            id="confrimPassword"
            className={styles.input}
            placeholder="CONFIRM PASSWORD"
            autoComplete="true"
            {...register("confrimPassword")}
          />
          {errors.confrimPassword && (
            <p className={styles.warningText}>
              {errors.confrimPassword.message}
            </p>
          )}
        </label>
        <label>
          <span>PHONE NUMBER</span>
          <input
            type="tel"
            id="phone"
            className={styles.input}
            placeholder="PHONE NUMBER"
            autoComplete="true"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className={styles.warningText}>{errors.phoneNumber.message}</p>
          )}
        </label>
      </form>
      <div className={styles.btns}>
        <button type="submit" form="signUpForm" className={styles.btn}>
          SIGN UP
        </button>
        <button
          type="button"
          className={cn(styles.btn, styles.cancel)}
          onClick={() => navigate("/login")}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
