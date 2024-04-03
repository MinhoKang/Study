import useForm from "../../hooks/useForm";
import styles from "./signUpPage.module.scss";
import cn from "classnames";

const SignUpPage = () => {
  const [email, setEmail] = useForm();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SIGN UP</h1>
      <form id="signUpForm" className={styles.form}>
        <label>
          <span>EMAIL</span>
          <input
            type="text"
            id="email"
            className={styles.input}
            placeholder="EMAIL"
          />
        </label>
        <label>
          <span>PASSWORD</span>
          <input
            type="password"
            id="password"
            className={styles.input}
            placeholder="PASSWORD"
          />
        </label>
        <label>
          <span>CONFIRM PASSWORD</span>
          <input
            type="password"
            id="confrimPassword"
            className={styles.input}
            placeholder="CONFIRM PASSWORD"
          />
        </label>
        <label>
          <span>PHONE NUMBER</span>
          <input
            type="tel"
            id="phone"
            className={styles.input}
            placeholder="PHONE NUMBER"
          />
        </label>
      </form>
      <div className={styles.btns}>
        <button type="submit" form="signUpForm" className={styles.btn}>
          SIGN UP
        </button>
        <button type="button" className={cn(styles.btn, styles.cancel)}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
