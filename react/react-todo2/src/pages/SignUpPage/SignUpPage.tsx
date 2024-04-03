import { useState } from "react";
import styles from "./signUpPage.module.scss";
import cn from "classnames";
import { singUp } from "../../apis/signUp";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const result = await singUp(email, password, checkPassword, phoneNumber);
    console.log(result);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SIGN UP</h1>
      <form id="signUpForm" className={styles.form}>
        <label>
          <span>EMAIL</span>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="EMAIL"
          />
        </label>
        <label>
          <span>PASSWORD</span>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            placeholder="PASSWORD"
          />
        </label>
        <label>
          <span>CONFIRM PASSWORD</span>
          <input
            type="password"
            id="confrimPassword"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            className={styles.input}
            placeholder="CONFIRM PASSWORD"
          />
        </label>
        <label>
          <span>PHONE NUMBER</span>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.input}
            placeholder="PHONE NUMBER"
            // pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
          />
        </label>
      </form>
      <div className={styles.btns}>
        <button
          type="submit"
          form="signUpForm"
          className={styles.btn}
          onClick={onSignUp}
        >
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
